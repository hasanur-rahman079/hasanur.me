import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  text-align: center;
  h2 {
    font-family: "Montserrat Bold";
    font-size: 4rem;
    text-transform: uppercase;
  }

  p {
    font-family: "RobotoMono Regular";
    font-size: 2rem;
    margin-top: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export default function SectionTitle({
  title = "This is title",
  subTitle = "This is subtitle",
}) {
  return (
    <Subtitle>
      <div class="container">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </Subtitle>
  );
}
