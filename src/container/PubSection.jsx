import React from "react";
import { PubCardSlice, SectionTitle } from "../components";
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
  return (
    <PubSectionStyles>
      <div>
        <SectionTitle
          title="Recent Publications"
          btnText="View more"
          link="/research"
        />

        <div className="pubsecItems">
          <PubCardSlice />
        </div>
      </div>
    </PubSectionStyles>
  );
}
