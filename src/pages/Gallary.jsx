import React from "react";
import styled from "styled-components";
import PageTitle from "../components/Typography/PageTitle";
import { GallaryTab } from "../container";
import SEO from "../lib/SEO";

const GallaryStyles = styled.div`
  .content {
    margin-top: 2rem;
  }
`;

function Gallary() {
  return (
    <>
      <SEO pageTitle="Gallary" />

      <GallaryStyles className="pageContainer">
        <PageTitle pageTitle="My Gallary" />

        <div className="content">
          <GallaryTab />
        </div>
      </GallaryStyles>
    </>
  );
}

export default Gallary;
