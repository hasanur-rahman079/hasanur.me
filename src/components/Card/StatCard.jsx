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

    .number {
      h3 {
        font-size: 55px;
        font-weight: 900;
        color: ${(props) => props.theme.color.butterscotch};
      }
    }

    .text {
      margin-top: 10px;

      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;
        color: ${(props) => props.theme.color.headline_text};
      }
    }

    .info {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 400;
      color: ${(props) => props.theme.color.link_text};

      a {
        color: ${(props) => props.theme.color.link_text};
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
