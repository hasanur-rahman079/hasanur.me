import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import "../styles/masonryCssStyles.css";
import axios from "axios";

const TestItemsStyles = styled.div`
  margin-top: 10rem;
  padding: 0 2rem;
  color: white;
  display: grid;
  align-self: start;
  padding: 1.2em;
  border-radius: 0.5rem;

  .pubItems_info {
    h3 {
      .pubtitle {
        font-family: "Helvetica Neue", sans-serif;
        font-size: 2.3rem;
        font-weight: 700;
        color: var(--gray-text);

        &:hover {
          color: var(--white);
        }
      }
    }

    .authors {
      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 400;
      margin: 14px 0;
    }

    .jName {
      font-size: 1.6rem;
      font-weight: 500;
      font-style: italic;
      margin-top: 8px;
      margin-right: 10px !important;
    }
    .jIssue,
    .impact {
      font-size: 1.6rem;
      font-weight: 400;
      margin: 8px 10px 8px 0;
    }
    .date {
      font-size: 1.6rem;
      margin: 8px 0;
    }

    .metrics {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;

      .doi {
        font-size: 1.6rem;
        font-weight: 500;
        text-decoration: underline;
        text-decoration-color: var(--butterscotch);
        text-decoration-thickness: 3px;
        margin-top: 8px;
        color: var(--gray-text);

        &:hover {
          color: var(--white);
        }
      }
    }
  }
`;

const Columns = {
  default: 2,
  1100: 2,
  700: 1,
};

const TestItems = () => {
  const [post, setPost] = useState([]);
  const [isError, setIsError] = useState("");

  // NOTE: using async
  // const getUsers = async () => {
  //   const response = await fetch(" https://api.github.com/users");
  //   setUsers(await response.json());
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPost(res.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <TestItemsStyles>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* NOTE: if the erros happens then show it otherwise do not show */}
        {isError !== "" && <h2>{isError}</h2>}

        {post.map((posts) => {
          const { id, title, body } = posts;
          return (
            <div className="pubItems_info">
              <h3>
                {
                  <a className="pubtitle" href="#" target="__blank">
                    {title.slice(0, 15).toUpperCase()}
                  </a>
                }
              </h3>

              <p className="authors">{body}</p>
              <p className="journal">
                <span className="jName">journaL</span>
                <span className="jIssue">issue</span>
                <span className="jIssue">impact</span>
              </p>
              <p className="date">date</p>

              <div className="metrics">
                <div>
                  {
                    <a className="doi" href="#" target="__blank">
                      Read Article
                    </a>
                  }
                </div>

                <span
                  className="__dimensions_badge_embed__"
                  data-doi="#"
                  data-style="large_rectangle"
                ></span>
              </div>
            </div>
          );
        })}
      </Masonry>
    </TestItemsStyles>
  );
};

export default TestItems;
