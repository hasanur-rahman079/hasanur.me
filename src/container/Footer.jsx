import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { icons } from "../constants";

const FooterSectionStyles = styled.div`
  margin-top: 4rem;
  padding: 2.5rem 0 1.3rem;
  text-align: center;
  background-color: ${(props) => props.theme.color.bg};

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    p {
      font-size: 17px;
      font-weight: 500;
      color: ${(props) => props.theme.color.p_text};
    }

    a {
      color: ${(props) => props.theme.color.p_text};
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    gap: 1.5rem;
    margin-top: 1rem;

    .git {
      img {
        width: 27px;
        height: 27px;
      }
    }

    a {
      font-size: 16px;
      font-weight: 500;
      color: ${(props) => props.theme.color.p_text};
    }

    img {
      width: 32px;
      height: 32px;
    }
    .git,
    .scholar,
    .gate {
      a {
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2.5rem 1.5rem 1.3rem;

    .bottom {
      a {
        span {
          display: none;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterSectionStyles>
      <div className="footer">
        <div className="top">
          <p>Made by MD. Hasanur Rahman</p>

          <p>
            <Link to="#">RSS</Link>
          </p>
        </div>

        <div className="bottom">
          <div className="git">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Github</span>
              <img src={icons.GH} alt="Github" />
            </a>
          </div>

          <div className="scholar">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>Google Scholar</span>
              <img src={icons.GS} alt="Google Scholar Icon" />
            </a>
          </div>

          <div className="gate">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <span>ResearchGate</span>
              <img src={icons.RG} alt="researchGate Icon" />
            </a>
          </div>
        </div>
      </div>
    </FooterSectionStyles>
  );
}
