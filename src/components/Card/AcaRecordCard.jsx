import React from "react";
import styled from "styled-components";

const AcademicRStyle = styled.div`
  .contents {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100%;
    margin: 0 auto;
    grid-column-gap: 2rem;

    .left {
      display: grid;
      grid-column: 1 / span 7;
      align-self: start;
      gap: 10px;

      .badge {
        width: fit-content;
        padding: 4px 10px;
        background-color: ${(props) => props.theme.color.btn_bg};
        font-size: 17px;
        color: ${(props) => props.theme.color.butterscotch};
        border-radius: 5px;
      }

      h2 {
        font-size: 22px;
        line-height: 30px;
        color: ${(props) => props.theme.color.headline_text};
      }
      .dept {
        font-size: 17px;
        line-height: 27px;
        font-weight: 600;
        color: ${(props) => props.theme.color.p_text};
      }
      .year {
        font-size: 17px;
        line-height: 27px;
        font-weight: 500;
        color: ${(props) => props.theme.color.p_text};

        span {
          font-weight: 400;
        }
      }

      p {
        font-size: 17px;
        line-height: 27px;
        color: ${(props) => props.theme.color.p_text};
      }
    }
    .right {
      display: grid;
      grid-column: 8 / span 5;
      align-self: start;

      img {
        border-radius: 10px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .contents {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;

      .left {
        display: grid;
        grid-column: 1/2;

        .badge {
          font-size: 15px;
        }
        
        h2 {
          font-size: 20px;
          line-height: 28px;
        }

        .dept,
        .year,
        p {
          font-size: 16px;
          line-height: 25px;
        }
      }

      .right {
        display: grid;
        grid-column: 1/2;
        margin-top: 1rem;
      }
    }
  }
`;

function AcRecordCard(children) {
  return (
    <AcademicRStyle>
      <div className="contents">
        <div className="left">
          <div className="badge">
            <span>{children.degree}</span>
          </div>
          <h2>{children.institute}</h2>
          <p className="dept">{children.dept}</p>
          <div className="year">
            Session: <span>{children.session}</span>
          </div>
          <div className="year">
            Graduated: <span>{children.graduated}</span>
          </div>

          <div className="info">
            <p>{children.info}</p>
          </div>
        </div>

        <div className="right">
          <img src={children.Img} alt="" />
        </div>
      </div>
    </AcademicRStyle>
  );
}

export default AcRecordCard;
