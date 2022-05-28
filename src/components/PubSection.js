import React from "react";
import publications from "../assets/data/publications";
import PubItems from "./PubItems";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import Pbutton from "../components/Pbutton";

const PubSectionStyles = styled.div`
  .pubsecItems {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.8em;
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
  return (
    <PubSectionStyles>
      <div className="container">
        <SectionTitle
          title="Publications"
          subTitle="Find my recent publications here"
        />

        <div className="pubsecItems">
          {publications.map((publication, index, i) => {
            if (index >= 4) return;
            return (
              <div key={publication.id}>
                <PubItems
                  title={publication.title}
                  authors={publication.authors}
                  journaL={publication.journal}
                  issue={publication.issue}
                  date={publication.date}
                  doi={publication.doi}
                  impact={publication.if}
                  metric={publication.metric}
                />
              </div>
            );
          })}
        </div>

        <div className="pubbutton">
          <Pbutton btnLink="./publications" btnText="All Publications" />
        </div>
      </div>
    </PubSectionStyles>
  );
}
