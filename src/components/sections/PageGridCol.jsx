import React from "react";
import styled from "styled-components";

const PageGridColStyle = styled.div`
  .contents {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100%;
    margin: 0 auto;
    grid-column-gap: 2rem;

    .left {
      display: grid;
      grid-column: 1 / span 8;
      align-self: start;

      h2 {
        color: ${(props) => props.theme.color.headline_text};
        font-size: 24px;
        line-height: 32px;
      }

      hr {
        margin-top: 5px;
        height: 3px;
        border: none;
        background: #eaf4f4;
      }

      p {
        margin-top: 1rem;
        color: ${(props) => props.theme.color.p_text};
        font-size: 17px;
        line-height: 27px;
      }
    }
    .right {
      display: grid;
      grid-column: 9 / span 5;
      align-self: start;
      margin-top: 5rem;
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

        h2 {
          font-size: 22px;
        }

        p {
          font-size: 16px;
          line-height: 26px;
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

function PageGridCol(col) {
  return (
    <PageGridColStyle>
      <div className="contents">
        <div className="left">
          <h2>{col.title}</h2>

          <hr />

          <p>{col.text}</p>
        </div>

        <div className="right">
          <img src={col.Img} alt="" />
        </div>
      </div>
    </PageGridColStyle>
  );
}

export default PageGridCol;
