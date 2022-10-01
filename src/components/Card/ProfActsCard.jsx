import React from "react";
import styled from "styled-components";

const ProfActsCardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 100%;
  margin: 0 auto;

  .contents {
    display: flex;
    grid-column: 2/12;
    padding: 18px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.color.bg_dark};
    margin: 0 auto;
    max-width: 100%;

    .left {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-self: start;
      grid-row-gap: 10px;
      padding-right: 10px;

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

        .res {
          p {
            span {
              font-weight: 400;
            }
          }
        }

        .link {
          margin-top: 10px;
          a {
            color: ${(props) => props.theme.color.p_text};
          }
        }
      }
    }

    .right {
      display: grid;
      align-self: center;
      justify-content: end;
      width: 20%;
    }
  }

  @media only screen and (max-width: 768px) {
    .contents {
      display: flex;
      flex-direction: column;
      grid-template-columns: 1fr;
      grid-column: 1/13;

      .left {
        width: 100%;
        padding-right: 0;

        .name {
          font-size: 21px;
          line-height: 28px;
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
        width: 100%;
        justify-content: center;
        margin-top: 3rem;

        img {
          height: 18rem;
          object-fit: contain;
        }
      }
    }
  }
`;

function ProfActsCard(children) {
  return (
    <ProfActsCardStyle>
      <div className="contents">
        <div className="left">
          <div>
            <h2 className="name">{children.name}</h2>
          </div>

          <div>
            <p className="title">
              {children.title} ({children.date})
            </p>
          </div>

          <div>
            <p className="location">{children.location}</p>
          </div>

          <div className="duties">
            <div className="res">
              <p>
                Responsibilities: <span> {children.duties}</span>
              </p>
            </div>

            <div className="link">
              <a href={children.web} target="__blank">
                Website
              </a>
            </div>
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
