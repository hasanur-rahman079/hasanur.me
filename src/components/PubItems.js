import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PubItemsStyles = styled.div`
  background-color: #282829;
  padding: 1.2em;
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--gray-2);
  }

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

    .doi {
      font-size: 1.6rem;
      font-weight: 500;
      text-decoration: underline;
      text-decoration-color: var(--butterscotch);
      text-decoration-thickness: 3px;
      margin-top: 8px;
      color: var(--gray-text);

      &:hover{
      color: var(--white);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .pubItems_info {
      h3 {
        .pubtitle {
          font-size: 2rem;
        }
      }

      .authors {
        font-size: 1.4rem;
        line-height: 2rem;
      }

      .jName {
        font-size: 1.4rem;
      }
      .jIssue,
      .impact {
        font-size: 1.4rem;
      }

      .date {
        font-size: 1.4rem;
      }

      .doi {
        font-size: 1.4rem;
      }
    }
  }
`;

export default function PubItems({
  title = "This is title",
  authors = "this is the author list",
  journaL = "this is the journal name",
  issue = "This is the issue number",
  date = "This is publication date",
  doi,
  impact = "0.00",
}) {
  return (
    <PubItemsStyles>
      <div className="pubItems_info">
        <h3>
          {
            <a className="pubtitle" href={doi} target="__blank">
              {title}
            </a>
          }
        </h3>

        <p className="authors">{authors}</p>
        <p className="journal">
          <span className="jName">{journaL}</span>
          <span className="jIssue">{issue}</span>
          <span className="jIssue">{impact}</span>
        </p>
        <p className="date">{date}</p>
        <div>
          {
            <a className="doi" href={doi} target="__blank">
              {doi}
            </a>
          }
        </div>
      </div>
    </PubItemsStyles>
  );
}
