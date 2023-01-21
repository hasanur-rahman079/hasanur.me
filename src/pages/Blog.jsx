import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogsPageStyle = styled.div`
  h1,
  .loading {
    color: ${(props) => props.theme.color.headline_text};
    font-size: 24px;
    line-height: 32px;
  }
`;

const GET_POST = gql`
  query GetPostsEdges {
    posts {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default function Blog() {
  const { loading, error, data } = useQuery(GET_POST);

  const postFound = Boolean(data?.posts);

  // console.log(data);

  return (
    <BlogsPageStyle className="pageContainer">
      <div>
        {loading ? (
          <p className="loading">Loading…</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : !postFound ? (
          <p>Post could not be found.</p>
        ) : (
          <div>
            {data.posts.edges.map((elm, index) => {
              return (
                <div key={index}>
                  <h1>{elm.node.title}</h1>
                  <Link to={`/blog/${elm.node.slug}`}>Read more</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </BlogsPageStyle>
  );
}
