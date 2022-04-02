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

export default function ExpItems() {
  return (
    <ExpItemsStyles>
      <div className="expItemsInfo">
        <h3>
          <span className="title">Research Assistant</span> at{" "}
          <span className="company">ABex Bio-Res</span>
        </h3>
        <p className="address">East Azampur, Dhaka-1230, Bangladesh</p>
        <p className="focus">Focus: </p>

        <div className="time">
          <span className="date">Aug2019-present</span>
        </div>
      </div>
    </ExpItemsStyles>
  );
}
