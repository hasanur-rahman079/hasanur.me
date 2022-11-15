import React from "react";
import styled from "styled-components";
import { StatCard } from "../components";

const StatSectionStyle = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 33px;
  max-width: 100%;

  @media only screen and (max-width: 998px) {
    margin: 40px auto;
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;
    grid-gap: 2rem;
  }
`;

function StatSection() {
  return (
    <StatSectionStyle>
      <div>
        <StatCard
          number="6k+"
          title="Total Read"
          from="ResearchGate"
          link="https://www.researchgate.net/profile/Md-Rahman-262"
        />
      </div>

      <div>
        <StatCard
          number="219"
          title="Total Citations"
          from="Google Scholar"
          link="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
        />
      </div>

      <div>
        <StatCard
          number="9"
          title="h Index"
          from="Google Scholar"
          link="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
        />
      </div>

      <div>
        <StatCard
          number="9"
          title="i10 Index"
          from="ResearchGate"
          link="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
        />
      </div>
    </StatSectionStyle>
  );
}

export default StatSection;
