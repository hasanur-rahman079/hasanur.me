import React from "react";
import styled from "styled-components";
import PageTitle from "../components/Typography/PageTitle";
import { GallaryTab } from "../container";
import { TabTitle } from "../utils/GeneralFunctions";

const GallaryStyles = styled.div`
  .content {
    margin-top: 2rem;
  }
`;

function Gallary() {
  TabTitle("Gallary - MD. Hasanur Rahman");

  return (
    <GallaryStyles className="pageContainer">
      <PageTitle pageTitle="My Gallary" />

      <div className="content">
        <GallaryTab />
      </div>
    </GallaryStyles>
  );
}

export default Gallary;
