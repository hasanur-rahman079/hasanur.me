import React from "react";
import PubItems from "./Items/PubItems";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Pbutton from "./Pbutton";
import UseScript from "./UseScript";

const PubSectionStyles = styled.div`
  .pubsecItems {
    margin-top: 3rem;
  }

  .pubbutton {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  @media only screen and (max-width: 768px) {
    .pubsecItems {
      grid-template-columns: 1fr;
    }

    .pubbutton {
      margin-top: 10px;
    }
  }
`;

export default function PubSection() {
  UseScript("https://badge.dimensions.ai/badge.js");
  UseScript("https://cdn.plu.mx/widget-popup.js");
  return (
    <PubSectionStyles>
      <div className="container">
        <SectionTitle
          title="Publications"
          subTitle="Find my recent publications here"
        />

        <div className="pubsecItems">
          <div>
            <PubItems />
          </div>
        </div>

        <div className="pubbutton">
          <Pbutton btnLink="./publications" btnText="All Publications" />
        </div>
      </div>
    </PubSectionStyles>
  );
}
