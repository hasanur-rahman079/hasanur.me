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

    .date {
      background-color: var(--gray-2);
      color: var(--gray-1);
      padding: 0.3em 0.7em;
      border-radius: 5px;
      font-size: 1.4rem;
      margin-left: 20px;
    }
  }
`;

export default function ReviewExpItems({
  title = "Reviewer or Editor",
  name = "Name of the organizing",
  website = "www.example.com",
  date = "Jan 2022 - Feb 2040",
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
              {name}
            </a>
          </span>
          <span className="date">{date}</span>
        </h3>
      </div>
    </ReviewExpItemsStyles>
  );
}
