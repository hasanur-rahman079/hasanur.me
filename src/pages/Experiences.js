import React from "react";
import styled from "styled-components";
import ExpSection from "../components/ExpSection";
import OrganizingExpSection from "../components/OrganizingExpSection";
import ProfExpSection from "../components/ProfExpSection";
import ReviewExpSection from "../components/ReviewExpSection";
import SectionTitle from "../components/SectionTitle";

const ExperiencesStyles = styled.div`
  padding: 10rem 0;

  .secTitle {
    margin: 8rem 0;
  }

  .ResExp,
  .ReviewExp {
    margin: 50px 0;
  }
`;

export const Experiences = () => {
  return (
    <ExperiencesStyles>
      <div className="container">
        <SectionTitle
          title="Research Experiences"
          subTitle="Find my research expericences here"
        />

        <div className="ResExp">
          <ExpSection />
        </div>

        <div className="secTitle">
          <SectionTitle
            title="Review Experiences"
            subTitle="Find my research expericences here"
          />
        </div>

        <div className="ReviewExp">
          <ReviewExpSection />
        </div>

        <div className="secTitle">
          <SectionTitle
            title="Organizing Leadership Experiences"
            subTitle="Find my leadership expericences here"
          />
        </div>

        <div className="ReviewExp">
          <OrganizingExpSection />
        </div>

        <div className="secTitle">
          <SectionTitle
            title="Professional Experiences"
            subTitle="Find my professional expericences here"
          />
        </div>

        <div className="ReviewExp">
          <ProfExpSection />
        </div>


      </div>
    </ExperiencesStyles>
  );
};
