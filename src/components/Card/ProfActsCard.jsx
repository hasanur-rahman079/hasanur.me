import React from "react";
import styled from "styled-components";

const ProfActsCardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 100%;
  margin: 0 auto;

  .contents {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2/12;
    max-width: 100%;
    margin: 0 auto;
    padding: 18px;
    border-radius: 5px;
    grid-column-gap: 2rem;
    background-color: ${(props) => props.theme.color.bg_dark};

    .left {
      display: grid;
      grid-column: 1 / span 9;
      align-self: start;
      gap: 10px;

      .name {
        font-size: 24px;
        line-height: 32px;
        color: ${(props) => props.theme.color.headline_text};
      }

      .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        color: ${(props) => props.theme.color.p_text};
      }

      .location {
        font-size: 17px;
        line-height: 27px;
        font-weight: 600;
        color: ${(props) => props.theme.color.p_text};
      }

      .duties {
        font-size: 17px;
        line-height: 27px;
        font-weight: 500;
        color: ${(props) => props.theme.color.p_text};

        span {
          font-weight: 400;
        }
      }
    }

    .right {
      display: grid;
      grid-column: 10 / span 3;
      align-self: start;
      justify-content: end;
    }
  }

  @media only screen and (max-width: 768px) {
    .contents {
      display: grid;
      grid-template-columns: 1fr;
      grid-column: 1/13;

      .left {
        display: grid;
        grid-column: 1/2;

        .name {
          font-size: 22px;
        }

        .title,
        .location {
          font-size: 16px;
          line-height: 25px;
          font-weight: 500;
        }

        .duties {
          font-size: 16px;
        }
      }
      .right {
        display: grid;
        grid-column: 1/2;
        justify-content: center;
        margin-top: 3rem;
      }
    }
  }
`;

function ProfActsCard(children) {
  return (
    <ProfActsCardStyle>
      <div className="contents">
        <div className="left">
          <h2 className="name">{children.name}</h2>
          <p className="title">{children.title}</p>
          <p className="location">{children.location}</p>
          <div className="duties">
            Responsibilities: 
            <span> {children.duties}</span>
          </div>
        </div>

        <div className="right">
          <img src={children.Img} alt="" />
        </div>
      </div>
    </ProfActsCardStyle>
  );
}

export default ProfActsCard;
