import React from "react";
import styled from "styled-components";

const ReviewExpItemsStyles = styled.div`
  .expItemsInfo {
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
      .title {
        font-size: 2rem;
        line-height: 2.7rem;

        .Institute {
          color: white;
          text-decoration: underline;
        }
      }
    }

    .focus {
      font-size: 1.7rem;
      line-height: 2.4rem;
      margin: 10px 0;
    }

    .credit {
      font-size: 1.7rem;
      line-height: 2.4rem;

      a {
        color: var(--white);
        text-decoration: underline;
        font-weight: 500;
      }
    }

    .time {
      margin-top: 1.5rem;

      .date {
        background-color: var(--gray-2);
        color: var(--gray-1);
        padding: 0.5em 0.7em;
        border-radius: 5px;
        font-size: 1.4rem;
      }
    }
  }
`;

export default function ReviewExpItems({
  title = "Reviewer or Editor",
  journal = "Name of the Journal",
  website = "www.example.com",
  credentials = "This is the number of credientials",
  date = "Jan 2022 - Feb 2040",
  articles = "The working areas",
}) {
  return (
    <ReviewExpItemsStyles>
      <div className="expItemsInfo">
        <h3>
          <span className="title">
            {title} at{" "}
            <a
              className="Institute"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {journal}
            </a>
          </span>
        </h3>
        <p className="focus">
          I've reviewed {articles} articles for this journal
        </p>

        <span className="credit">
          View the{" "}
          <a href={credentials} target="_blank" rel="noopener noreferrer">
            credientials
          </a>{" "}
        </span>

        <div className="time">
          <span className="date">{date}</span>
        </div>
      </div>
    </ReviewExpItemsStyles>
  );
}
