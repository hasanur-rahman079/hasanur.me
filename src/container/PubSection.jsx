import React from "react";
import { PubCard, SectionTitle, UseScript } from "../components";
import styled from "styled-components";

const PubSectionStyles = styled.div`
  .pubsecItems {
    margin-top: 3rem;
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .pubsecItems {
      /* grid-template-columns: 1fr; */
    }
  }
`;

export default function PubSection() {
  UseScript("https://badge.dimensions.ai/badge.js");
  UseScript("https://cdn.plu.mx/widget-popup.js");
  return (
    <PubSectionStyles>
      <div>
        <SectionTitle
          title="Publications"
          btnText="View more"
          link="/publications"
        />

        <div className="pubsecItems">
          <PubCard />
        </div>
      </div>
    </PubSectionStyles>
  );
}
