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

        .name {
          color: var(--carmine-pink);
        }
      }

      .hero_info {
        margin-top: 2rem;

        .downloadbtn{
        margin-top: 4rem;
      }
      }

    }

    .hero_img {
      img {
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        margin: 0px;
        border-radius: 10px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      margin: 70px 0;
      justify-content: flex-start;

      .left_items{
        width: 100%;

        .hero_heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 3rem;
        }
      }
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
              <span>Hello👋</span>
              <span>
                I'm <span className="name">Hasan</span>
              </span>
            </h1>

            <div className="hero_info">
              <Ptext>
                A biotechnology graduate interested in molecular signalling
                pathways, cancer informatics, and molecular immunology.
                Currently looking for an MSc/PhD position in biotechnology and
                genetic engineering, focusing on oncogenes and their therapeutic
                strategies.
              </Ptext>

              <div className="downloadbtn">
                <Pbutton
                  btnLink="/about"
                  btnText="View Academic CV"
                  outLine={true}
                />
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
