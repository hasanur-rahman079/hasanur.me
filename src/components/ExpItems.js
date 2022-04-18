import React from "react";
import styled from "styled-components";

const ExpItemsStyles = styled.div`
  .expItemsInfo {
    h3 {
      font-size: 2rem;
      .title {
        font-size: 2rem;
      }
      .company {
        font-size: 2rem;
      }
    }

    .address {
      font-size: 1.7rem;
    }

    .focus {
      font-size: 1.7rem;
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
            {title} at {institute}
          </span>
        </h3>
        <span>{weblink}</span>
        <p className="address">{address}</p>
        <p className="focus">{focus}</p>

        <div className="time">
          <span className="date">{time}</span>
        </div>
      </div>
    </ExpItemsStyles>
  );
}
