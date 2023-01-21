import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundStyle = styled.div`
  .contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2.5rem;
      color: ${(props) => props.theme.color.p_text};
      font-weight: 700;

      @media only screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }

    .button {
      margin-top: 2rem;
      background: ${(props) => props.theme.color.btn_bg};
      font-size: 2rem;
      padding: 1rem;
      border-radius: 5px;
      a {
        color: ${(props) => props.theme.color.butterscotch};
      }

      @media only screen and (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;

export default function PageNotFound() {
  return (
    <PageNotFoundStyle className="pageContainer">
      <div className="contents">
        <div>
          <p>
            Opps! The Page you are looking for is not available on this site
          </p>
        </div>

        <div className="button">
          <NavLink to="/">Get back to Homepage</NavLink>
        </div>
      </div>
    </PageNotFoundStyle>
  );
}
