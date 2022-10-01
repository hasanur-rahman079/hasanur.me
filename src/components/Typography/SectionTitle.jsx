import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Subtitle = styled.div`
  margin: 17px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    h2 {
      font-family: "Inter", sans-serif;
      color: ${(props) => props.theme.color.butterscotch};
      font-size: 34px;
      text-transform: capitalize;
    }
  }

  .btn {
    background-color: ${(props) => props.theme.color.btn_bg};
    padding: 5px 10px;
    border: none;
    border-radius: 5px;

    a {
      color: ${(props) => props.theme.color.link_text};
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    .title {
      h2 {
        font-size: 28px;
      }
    }

    .btn {
      padding: 3px 8px;
      border-radius: 4px;

      a {
        font-size: 16px;
        line-height: 28px;
      }
    }
  }
`;

export default function SectionTitle({
  title = "This is title",
  btnText = "Button",
  link = "/",
}) {
  return (
    <Subtitle>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="btn">
        <Link to={link}>{btnText}</Link>
      </div>
    </Subtitle>
  );
}
