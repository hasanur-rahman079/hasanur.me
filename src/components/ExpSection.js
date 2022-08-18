import React from "react";
import ExpItems from "./ExpItems";
import researchs from "../assets/data/experience";
import styled from "styled-components";

const ExpSectionStyle = styled.div`
  .expsecItems {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    .expsecItems {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ExpSection() {
  return (
    <ExpSectionStyle>
      <div className="expsecItems">
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
