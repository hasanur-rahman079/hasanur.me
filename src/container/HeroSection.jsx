import React from "react";
import styled from "styled-components";
import { Ptext } from "../components";
import { images } from "../constants";

const HeroStyle = styled.div`
  .hero {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 50px;
    align-items: center;
    justify-content: space-around;
    margin: 30px auto;

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
        font-weight: 600;
        font-family: "Helvetica Neue", sans-serif;
        color: ${(props) => props.theme.color.card_text};

        .name {
          font-weight: 800;
          color: ${(props) => props.theme.color.butterscotch};
        }
      }

      .hero_info {
        margin-top: 2rem;
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
      justify-content: flex-start;
      grid-gap: 0;

      .hero_info {
        text-align: justify;
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
                <br />
                <br />
                Check out my <span>research publications</span> on areas like
                Cancer, Alzheimer's Disease, Drug designing or learn more{" "}
                <span>about me</span>.
              </Ptext>
            </div>
          </div>

          <div className="hero_img">
            <img src={images.heroImgNew} alt="Hasanur Rahman" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
