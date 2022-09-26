import React from "react";
import styled from "styled-components";

const SocialIconStyle = styled.div`
  display: grid;
  background: ${(props) => props.theme.color.bg};
  padding: 10px 20px;
  width: 180px;
  text-align: center;
  border-radius: 10px;

  a {
    .icon {
      font-size: 35px;
      color: ${(props) => props.theme.color.butterscotch};
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${(props) => props.theme.color.p_text};
    }

    span {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${(props) => props.theme.color.gray_text};
    }
  }
`;

function SocialIcon(icon) {
  return (
    <SocialIconStyle>
      <a href={icon.url} target="_blank" rel="noopener noreferrer">
        <div className="icon">{icon.iconCode}</div>
        <p>{icon.name}</p>
        <span>{icon.userName}</span>
      </a>
    </SocialIconStyle>
  );
}

export default SocialIcon;
