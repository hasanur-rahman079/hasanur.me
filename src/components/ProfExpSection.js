import React from "react";
import ExpItems from "./OrganizingExpItems";
import styled from "styled-components";
import profexps from "../assets/data/profexp";

const ProfExpSectionStyle = styled.div`
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

export default function ProfExpSection() {
  return (
    <ProfExpSectionStyle>
      <div className="expsecItems">
        {profexps.map((profexp) => {
          return (
            <ExpItems
              title={profexp.title}
              name={profexp.name}
              website={profexp.website}
              date={profexp.date}
            />
          );
        })}
      </div>
    </ProfExpSectionStyle>
  );
}
