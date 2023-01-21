import { gql, useQuery } from "@apollo/client";
import React from "react";
import styled from "styled-components";

const BlogPageStyle = styled.div`
  h2,
  p {
    color: ${(props) => props.theme.color.headline_text};
    font-size: 24px;
    line-height: 32px;
  }
`;

const GET_POST_DETAILS = gql`
  query GetPostDetails($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      author {
        node {
          name
        }
      }
      date
      content
    }
  }
`;

export default function BlogDetails(props) {
  const { loading, error, data } = useQuery(GET_POST_DETAILS, {
    variables: {
      id: props.match.params.slug,
    },
  });

  console.log(data);

  const postFound = Boolean(data?.post);

  return (
    <BlogPageStyle className="pageContainer">
      <div>
        {loading ? (
          <p>Loading…</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : !postFound ? (
          <p>Post could not be found.</p>
        ) : (
          <div>
            <h2>{data.post.title}</h2>
            <p>Hola</p>
          </div>
        )}
      </div>
    </BlogPageStyle>
  );
}
