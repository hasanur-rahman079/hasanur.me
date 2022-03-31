import React from "react";
import styled from "styled-components";
import HeroImg from "../assets/images/hero.png";
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Ptext>
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
