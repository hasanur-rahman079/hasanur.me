import React from "react";
import ExpItems from "./ExpItems";
import researchs from "../assets/data/experiences";
import styled from "styled-components";

const ExpSectionStyle = styled.div`
  .exp {
    margin-top: 25px;
  }
`;

export default function ExpSection() {
  return (
    <ExpSectionStyle>
      <div className="exp">
        {researchs.map((research) => {
          return (
            <ExpItems
              title={research.title}
              institute={research.institute}
              weblink={research.weblink}
              address={research.address}
              time={research.time}
              focus={research.focus}
            />
          );
        })}
      </div>
    </ExpSectionStyle>
  );
}
