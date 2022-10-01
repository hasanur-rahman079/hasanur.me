import React, { useState } from "react";
import styled from "styled-components";
import { Photos } from "../components";
import Gallary from "../assets/data/gallary";

const GallaryTabSecStyle = styled.div`
  .grid__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100%;
    margin: 0 auto;
    grid-gap: 2rem;

    .left__col {
      display: grid;
      grid-column: 1 / span 2;
      align-self: start;
      background-color: ${(props) => props.theme.color.bg};
      height: 100%;

      .contents {
        display: flex;
        flex-direction: column;
        grid-gap: 1rem;

        .app__image-filter-items {
          display: flex;
          flex-direction: column;
          grid-gap: 1.2rem;

          .tab__Title {
            padding: 15px 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: ${(props) => props.theme.color.bg_dark};

            &:hover {
              background-color: ${(props) => props.theme.color.butterscotch};
              color: #fff;
            }

            h3 {
              font-size: 15px;
              font-weight: 600;
              color: ${(props) => props.theme.color.headline_text};

              &:hover {
                color: #fff;
              }

              @media only screen and (max-width: 768px) {
                font-size: 13px;
              }
            }
          }

          .item__active {
            background: ${(props) => props.theme.color.butterscotch};
            h3 {
              color: white;
            }
          }
        }
      }
    }

    .right__col {
      display: grid;
      grid-column: 3 / span 10;
      align-self: start;

      .photos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;

        @media only screen and (max-width: 768px) {
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .grid__container {
      display: grid;
      grid-template-columns: 1fr;

      .left__col {
        display: grid;
        grid-column: 1/13;
        padding: 10px;
        background: none;

        .contents {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .app__image-filter-items {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
          }
        }
      }

      .right__col {
        display: grid;
        grid-column: 1/13;
      }
    }
  }
`;

const allCatValues = [...new Set(Gallary.map((allCat) => allCat.category))];

function GallaryTabSec({ images }) {
  const [buttons, setButtons] = useState(allCatValues);
  const [items, setItems] = useState(Gallary);
  const [activeButton, setActiveButton] = useState("Workshops");

  // Filter functions
  const filterTab = (button,) => {
    setButtons(allCatValues);
    setActiveButton(button);

    // Filtered data return function
    const filteredData = Gallary.filter((curElem) => {
      return curElem.category === button;
    });

    setItems(filteredData);
  };

  // let activeClass = buttons ? " item__active" : "";

  return (
    <GallaryTabSecStyle>
      <div className="grid__container">
        <div className="left__col">
          <div className="contents">
            <div className="app__image-filter-items">
              {buttons.map((catMenu, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => filterTab(catMenu)}
                    className={`tab__Title${
                      activeButton === catMenu ? " item__active" : ""
                    }`}
                  >
                    <h3>{catMenu}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="right__col">
          <div className="photos">
            {items.map((images, idx) => {
              const { id, img } = images;

              // console.log(images);

              return (
                <div key={idx}>
                  <div key={id}>
                    {images.category === "Workshops" ? (
                      <Photos photo={img} galleryID="my-test-gallery" />
                    ) : (
                      <Photos photo={img} galleryID="my-test-gallery" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </GallaryTabSecStyle>
  );
}

export default GallaryTabSec;
