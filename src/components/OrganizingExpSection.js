import React from "react";
import ExpItems from "./OrganizingExpItems";
import styled from "styled-components";
import organizings from "../assets/data/experience";

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

  let shopingList = [];

  shopingList = ["Milk", "Bread", "Apple"];
  shopingList.splice (1, 0, "Banana", "Eggs")
  shopingList.pop();
  shopingList.sort();
  let findMilk = shopingList.indexOf('Milk');
  shopingList.splice(1, 0, "Carrots", "Lettuce")

  console.log(shopingList);
  console.log(findMilk);

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
