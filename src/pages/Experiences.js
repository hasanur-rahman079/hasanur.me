import React from "react";
import styled from "styled-components";
import ExpSection from "../components/ExpSection";
import SectionTitle from "../components/SectionTitle";

const ExperiencesStyles = styled.div`
  padding: 10rem 0;
`;

export const Experiences = () => {
  return (
    <ExperiencesStyles>
      <div className="container">
        <SectionTitle
          title="Experiences"
          subTitle="Find my professional expericences here"
        />

        <div className="allExp">
          <ExpSection />
        </div>
      </div>
    </ExperiencesStyles>
  );
};
