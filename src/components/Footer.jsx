import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GSIcon from "../assets/icons/google-scholar.svg";
import GH from "../assets/icons/github.svg";
import RG from "../assets/icons/researchgate.svg";

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
              {" "}
              Github
              <img src={GH} alt="Github" />
            </a>
          </div>

          <div className="scholar">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              Google Scholar
              <img src={GSIcon} alt="Google Scholar Icon" />
            </a>
          </div>

          <div className="gate">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              {" "}
              ResearchGate
              <img src={RG} alt="researchGate Icon" />
            </a>
          </div>
        </div>
      </div>
    </FooterSectionStyles>
  );
}
