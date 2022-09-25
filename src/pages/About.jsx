import React from "react";
import styled from "styled-components";
import { PageGridCol } from "../container";
import { images } from "../constants";

const AboutPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export default function About() {
  return (
    <AboutPageStyle className="pageContainer">
      <div>
        <PageGridCol
          title="About me"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mi, commodo egestas sit velit. Id purus purus adipiscing aliquet justo interdum erat in. In velit nullam ac massa eu consequat luctus. Porttitor egestas nisl in nascetur odio ante id pharetra non. Pellentesque lacus leo, scelerisque interdum nam sit. Amet arcu, pellentesque sagittis vivamus commodo."
          Img={images.aboutImg}
        />
      </div>

      <div>
        <PageGridCol
          title="Education and Professional Activities"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mi, commodo egestas sit velit. Id purus purus adipiscing aliquet justo interdum erat in. In velit nullam ac massa eu consequat luctus. Porttitor egestas nisl in nascetur odio ante id pharetra non. Pellentesque lacus leo, scelerisque interdum nam sit. Amet arcu, pellentesque sagittis vivamus commodo."
        />
      </div>
    </AboutPageStyle>
  );
}
