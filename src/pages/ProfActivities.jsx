import React from "react";
import styled from "styled-components";
import ProfActsCard from "../components/cards/ProfActsCard";
import COB from "../assets/images/Blank_image.png";
// import PageTitle from "../components/items/PageTitle";

const ExperiencesStyles = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const ProfAct = () => {
  return (
    <ExperiencesStyles className="pageContainer">
      <div>
        {/* <PageTitle pageTitle="Professional Activities" /> */}
      </div>

      <div className="cards">
        <div>
          <ProfActsCard
            name="Community of Biotechnlogy"
            title="Chief Creative and Branding officer (Feb, 2020 - Feb 2022)"
            location="Dhaka, Bangladesh"
            duties="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              tellus quam praesent ut pulvinar. Elementum commodo ac faucibus
              consectetur nulla nulla non. Cras sollicitudin eu at non fusce."
            Img={COB}
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
            Img={COB}
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
            Img={COB}
          />
        </div>
      </div>
    </ExperiencesStyles>
  );
};
