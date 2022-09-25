import React from "react";
import styled from "styled-components";
import { ProfActsCard, PageTitle } from "../components";
import { images } from "../constants";

const ExperiencesStyles = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export default function ProfAct() {
  return (
    <ExperiencesStyles className="pageContainer">
      <PageTitle pageTitle="Professional Activities" />

      <div className="cards">
        <div>
          <ProfActsCard
            name="Community of Biotechnlogy"
            title="Chief Creative and Branding officer (Feb, 2020 - Feb 2022)"
            location="Dhaka, Bangladesh"
            duties="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              tellus quam praesent ut pulvinar. Elementum commodo ac faucibus
              consectetur nulla nulla non. Cras sollicitudin eu at non fusce."
            Img={images.demo}
          />
        </div>

        <div>
          <ProfActsCard
            name="Community of Biotechnlogy"
            title="Chief Creative and Branding officer (Feb, 2020 - Feb 2022)"
            location="Dhaka, Bangladesh"
            duties="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              tellus quam praesent ut pulvinar. Elementum commodo ac faucibus
              consectetur nulla nulla non. Cras sollicitudin eu at non fusce."
            Img={images.demo}
          />
        </div>

        <div>
          <ProfActsCard
            name="Community of Biotechnlogy"
            title="Chief Creative and Branding officer (Feb, 2020 - Feb 2022)"
            location="Dhaka, Bangladesh"
            duties="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              tellus quam praesent ut pulvinar. Elementum commodo ac faucibus
              consectetur nulla nulla non. Cras sollicitudin eu at non fusce."
            Img={images.demo}
          />
        </div>
      </div>
    </ExperiencesStyles>
  );
}
