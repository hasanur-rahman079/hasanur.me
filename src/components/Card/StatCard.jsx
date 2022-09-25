import React from "react";
import styled from "styled-components";
import { FaInfo } from "react-icons/fa";

const StatStyle = styled.div`
  background-color: ${(props) => props.theme.color.bg_dark};
  border-radius: 5px;

  .cardCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 27px;
    text-align: center;

    .number {
      h3 {
        font-size: 50px;
        font-weight: 900;
        color: ${(props) => props.theme.color.butterscotch};
      }
    }

    .text {
      margin-top: 6px;

      p {
        font-size: 22px;
        font-weight: 500;
        line-height: 32px;
        color: ${(props) => props.theme.color.headline_text};
      }
    }

    .info {
      margin-top: 15px;
      font-size: 14px;
      font-weight: 400;
      color: ${(props) => props.theme.color.link_text};

      a {
        color: ${(props) => props.theme.color.link_text};
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .cardCon {
      padding: 10px 20px;

      .number {
        h3 {
          font-size: 42px;
        }
      }

      .text {
        margin-top: 2px;

        p {
          font-size: 18px;
        }
      }

      .info {
        margin-top: 8px;
        font-size: 11px;
      }
    }
  }
`;

function StatCard(children) {
  return (
    <StatStyle>
      <div className=" cardCon">
        <div className="number">
          <h3>{children.number}</h3>
        </div>

        <div className="text">
          <p>{children.title}</p>
        </div>

        <div className="info">
          <FaInfo />
          <span>
            Stats data from{" "}
            <a href={children.link} target="_blank" rel="noreferrer">
              {children.from}
            </a>
          </span>
        </div>
      </div>
    </StatStyle>
  );
}

export default StatCard;
