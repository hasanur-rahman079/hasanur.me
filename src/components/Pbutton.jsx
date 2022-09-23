import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PbuttonStyle = styled.div`
  margin-top: 2rem;
  .button {
    padding: 0.7em 1.8em;
    font-size: 2.2rem;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) =>
      props.outLinestyle ? "transparent" : "#BCB4B4"};
    /* If the outlinestyle is true then the bg will be transparent otherwise if it is false 
    then the bg wiull br gray-1. here $() symbole means get the props */
    border-radius: 8px;
    display: inline-block;
    border: 2px solid #bcb4b4;
    color: ${(props) => (props.outLinestyle ? "#BCB4B4" : "#1E1E1E")};
  }

  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.5rem;
    }
  }
`;

export default function Pbutton({
  btnLink = "Test",
  btnText = "Button",
  outLine = false,
}) {
  return (
    <PbuttonStyle outLinestyle={outLine}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </PbuttonStyle>
  );
}
