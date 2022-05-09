import React from "react";
import ExpItems from "./OrganizingExpItems";
import styled from "styled-components";
import organizings from "../assets/data/orgexp";

const OrganizingExpSectionStyle = styled.div`
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

export default function OrganizingExpSection() {
  return (
    <OrganizingExpSectionStyle>
      <div className="expsecItems">
        {organizings.map((organizing) => {
          return (
            <ExpItems
              title={organizing.title}
              name={organizing.name}
              website={organizing.website}
              date={organizing.date}
            />
          );
        })}
      </div>
    </OrganizingExpSectionStyle>
  );
}
