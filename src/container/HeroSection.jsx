import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Ptext } from "../components";
import { images } from "../constants";

const HeroStyle = styled.div`
  .hero {
    width: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    /* flex-wrap: wrap; */
    grid-gap: 50px;
    align-items: center;
    justify-content: center;
    margin: 30px auto;

    .left_items {
      display: grid;
      /* flex-direction: column; */
      grid-column: 1/2;
      max-width: 700px;
      width: 45vw;
      margin: 0 auto;

      .hero_heading {
        display: flex;
        flex-direction: column;
        font-size: 4.5rem;
        font-weight: 600;
        font-family: "Helvetica Neue", sans-serif;
        color: ${(props) => props.theme.color.card_text};
        margin-bottom: 2rem;

        .name {
          font-weight: 800;
          color: ${(props) => props.theme.color.butterscotch};
        }
      }

      .hero_info {
        margin-top: 2rem;

        a {
          color: ${(props) => props.theme.color.link_text};
        }
      }
    }

    .hero_img {
      display: grid;
      grid-column: 2/3;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 10px;
        width: 360px;
        height: auto;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      display: grid;
      grid-template-columns: auto;
      grid-gap: 4rem;

      .left_items {
        display: grid;
        grid-column: 1/2;
        width: 100vw;
        padding: 0 3rem;

        .hero_heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 3rem;
        }

        .hero_info {
          text-align: justify;
        }
      }

      .hero_img {
        display: grid;
        grid-column: 1/2;

        img {
          border-radius: 10px;
          width: 340px;
          height: auto;
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

            <Ptext>Welcome to my digital garden 🌱</Ptext>

            <div className="hero_info">
              <Ptext>
                I'm a fresh biotechnology and genetic engineering graduate
                interested in cancer informatics, and molecular drug designing
                and development. Currently preparing for MSc/PhD studies in
                abroad.
                <br />
                <br />
                Check out my <Link to="/research">
                  research publications
                </Link>{" "}
                on areas like Cancer, Alzheimer's Disease, Drug designing or
                learn more <Link to="/about">about me</Link>.
              </Ptext>
            </div>
          </div>

          <div className="hero_img">
            <img src={images.heroHasanur} alt="MD. Hasanur Rahman, Hasan" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
