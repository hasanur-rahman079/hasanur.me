import React from "react";
import styled from "styled-components";

const PageTitleStyle = styled.div`
  h2 {
    font-size: 24px;
    line-height: 32px;
    color: ${(props) => props.theme.color.headline_text};
  }

  hr {
    margin-top: 5px;
    height: 3px;
    border: none;
    background: #eaf4f4;
  }
`;

function PageTitle({ pageTitle }) {
  return (
    <PageTitleStyle>
      <h2>{pageTitle}</h2>

      <hr />
    </PageTitleStyle>
  );
}

export default PageTitle;
