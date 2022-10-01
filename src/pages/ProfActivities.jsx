import React from "react";
import styled from "styled-components";
import { ProfActsCard, PageTitle } from "../components";
import { statData } from "../constants";

const ExperiencesStyles = styled.div`
  display: grid;
  grid-gap: 8rem;

  .prof__Act {
    .title {
      width: 80vw;
      margin: 0 auto;
    }

    .cards {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      gap: 2rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .prof__Act {
      .title {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`;

export default function ProfAct() {
  return (
    <ExperiencesStyles className="pageContainer">
      <div className="prof__Act">
        <div className="title">
          <PageTitle pageTitle="Research Experiences" />
        </div>

        <div className="cards">
          {statData.Experience.research.map((res) => {
            // console.log(res)
            return (
              <div key={res.id}>
                <ProfActsCard
                  name={res.institute}
                  title={res.title}
                  date={res.time}
                  location={res.address}
                  duties={res.focus}
                  web={res.weblink}
                  Img={res.img}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="prof__Act">
        <div className="title">
          <PageTitle pageTitle="Leaderships" />
        </div>

        <div className="cards">
          {statData.Experience.profexps.map((res) => {
            // console.log(res)
            return (
              <div key={res.id}>
                <ProfActsCard
                  name={res.name}
                  title={res.title}
                  date={res.date}
                  location={res.location}
                  duties={res.focus}
                  web={res.website}
                  Img={res.img}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="prof__Act">
        <div className="title">
          <PageTitle pageTitle="Conference organized" />
        </div>

        <div className="cards">
          {statData.Experience.organizings.map((res) => {
            // console.log(res)
            return (
              <div key={res.id}>
                <ProfActsCard
                  name={res.name}
                  title={res.title}
                  date={res.date}
                  location={res.location}
                  duties={res.focus}
                  web={res.website}
                  Img={res.img}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ExperiencesStyles>
  );
}
