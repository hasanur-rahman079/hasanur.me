import React from "react";
import styled from "styled-components";

const ExpItemsStyles = styled.div`
  .expItemsInfo {
    h3 {
      font-size: 2rem;
      line-height: 3.5rem;
      .title {
        font-size: 2rem;

        .Institute{
          color: white;
          text-decoration: underline;
        }
      }
    }

    .address {
      font-size: 1.7rem;
      margin-bottom: 15px;
    }

    .focus {
      font-size: 1.7rem;
      line-height: 2.4rem;
    }

    .time {
      margin-top: 2rem;

      .date {
        background-color: var(--gray-1);
        color: black;
        padding: 0.5em 0.7em;
        border-radius: 5px;
        font-size: 1.4rem;
      }
    }
  }
`;

export default function ExpItems({
  title = "This is the job title",
  institute = "Name of Institue",
  weblink = "www.example.com",
  address = "this is the office address",
  time = "jan-feb",
  focus = "The working areas",
}) {
  return (
    <ExpItemsStyles>
      <div className="expItemsInfo">
        <h3>
          <span className="title">
            {title} at <a className="Institute" href={weblink} target="_blank" rel="noopener noreferrer">{institute}</a>
          </span>
        </h3>
        <p className="address">{address}</p>
        <p className="focus">Working areas: {focus}</p>

        <div className="time">
          <span className="date">{time}</span>
        </div>
      </div>
    </ExpItemsStyles>
  );
}
