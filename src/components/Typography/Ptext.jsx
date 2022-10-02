import React from "react";
import styled from "styled-components";

const PStyle = styled.div`
  font-size: 1.9rem;
  line-height: 1.7em;
  color: ${(props) => props.theme.color.p_text};

  span {
    color: ${(props) => props.theme.color.link_text};
  }

  a {
    color: ${(props) => props.theme.color.link_text};
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// to grab the children from the probs use console.log(props) first to check whether
// you are getting the texts or not.So if we want to show the children text we have to use props.children ot use the children only into { children }

// Why we use children? why not custom props?

export default function Ptext({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}
