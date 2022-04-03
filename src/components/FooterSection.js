import React from "react";
import styled from "styled-components";

const FooterSectionStyles = styled.div`
  margin-top: 4rem;
  padding: 2.5rem;
  text-align: center;
  background-color: var(--deep-dark);

  p {
    font-size: 1.6rem;
  }
  hr {
    width: 40%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;

    p {
      font-size: 1.3rem;
    }
  }
`;

export default function FooterSection() {
  return (
    <FooterSectionStyles>
      <div className="container">
        <div className="copyright">
          <p>All right reserved @2022</p>
        </div>
        <br />
        <hr />
        <br />
        <p>Build with ReactJS</p>
      </div>
    </FooterSectionStyles>
  );
}
