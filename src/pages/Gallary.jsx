import React from "react";
import styled from "styled-components";
import PageTitle from "../components/Typography/PageTitle";
import { GallaryTab } from "../container";

const GallaryStyles = styled.div`
  .content {
    margin-top: 2rem;
  }
`;

function Gallary() {
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
