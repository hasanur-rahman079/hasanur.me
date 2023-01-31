import React from "react";
import styled from "styled-components";
// import DoiImg from "../../assets/images/DOI_logo.png";

const DoiStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    width: 25px;
    height: 25px;
  }

  .doi {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${(props) => props.theme.color.card_text};

    &:hover {
      color: ${(props) => props.theme.color.butterscotch};
      text-decoration: underline;
    }
  }
`;

function Doi({ link, title }) {
  return (
    <DoiStyle>
      {/* <img className="icon" src={DoiImg} alt="DOI logo" /> */}
      <a className="doi" href={`https://doi.org/${link}`} target="__blank">
        Doi: {title}
      </a>
    </DoiStyle>
  );
}

export default Doi;
