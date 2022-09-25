import React from "react";
import styled from "styled-components";
import StatCard from "../cards/StatCard";

const StatSectionStyle = styled.div`
  margin: 80px 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 33px;
`;

function StatSection() {
  return (
    <StatSectionStyle>
      <div>
        <StatCard
          number="6,877+"
          title="Total Read"
          from="ResearchGate"
          link="https://getbootstrap.com/docs/5.2/content/typography/"
        />
      </div>

      <div>
        <StatCard
          number="200+"
          title="Total Citations"
          from="Google Scholar"
          link="https://getbootstrap.com/docs/5.2/content/typography/"
        />
      </div>

      <div>
        <StatCard
          number="9"
          title="h & i10 Index"
          from="Google Scholar"
          link="https://getbootstrap.com/docs/5.2/content/typography/"
        />
      </div>

      <div>
        <StatCard
          number="302+"
          title="Recommendations"
          from="ResearchGate"
          link="https://getbootstrap.com/docs/5.2/content/typography/"
        />
      </div>
    </StatSectionStyle>
  );
}

export default StatSection;