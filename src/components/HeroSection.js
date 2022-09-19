import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/hasan.png";
import Pbutton from "./Pbutton";
import Ptext from "./Ptext";

const HeroStyle = styled.div`
  .hero {
    min-height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 50px;
    gap: 50px;
    align-items: center;
    justify-content: space-around;
    margin: 70px auto;

    .left_items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 700px;
      width: 45vw;

      .hero_heading {
        display: flex;
        flex-direction: column;
        font-size: 4.5rem;
        font-family: "Helvetica Neue", sans-serif;
        color: var(--white);

        .name {
          color: var(--butterscotch);
        }
      }

      .hero_info {
        margin-top: 2rem;
        color: var(--gray-text);

        .downloadbtn {
          margin-top: 4rem;
        }
      }

      .downloadbtn {
        padding: 0.7em 1.8em;
        font-size: 2.2rem;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);

        a {
          color: var(--white);
        }
      }

      .hero_img {
        img {
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          margin: 0;
          border-radius: 10px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      margin: 70px 0;
      justify-content: flex-start;

      .hero_info {
        text-align: center;
      }

      .left_items {
        width: 100vw;

        .hero_heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 3rem;
        }

        .downloadbtn {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="container">
        <div className="hero">
          <div className="left_items">
            <h1 className="hero_heading">
              <span>Hey,👋</span>
              <span>
                I'm <span className="name">Hasanur.</span>
              </span>
            </h1>

            <div className="hero_info">
              <Ptext>
                A fresh biotechnology and genetic engineering graduate
                interested in cancer informatics, and molecular drug designing
                and development. Currently preparing for MSc/PhD studies in
                abroad.
              </Ptext>

              <div className="downloadbtn">
                <a
                  href={require("../assets/pdf/Hasan_CV_updated July.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Academic CV
                </a>
              </div>
            </div>
          </div>

          <div className="hero_img">
            <img src={HeroImg} alt="Hasanur Rahman" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
