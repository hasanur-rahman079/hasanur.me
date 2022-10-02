import React from "react";
import styled from "styled-components";
import { AcRecordCard } from "../components";
import { images, pdfs } from "../constants";

import { FaFileDownload } from "react-icons/fa";

const AcademicPageStyle = styled.div`
  .title {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 24px;
      line-height: 32px;
      color: ${(props) => props.theme.color.headline_text};
    }

    .cv {
      font-size: 20px;
      line-height: 32px;
      font-weight: 600;

      a {
        color: ${(props) => props.theme.color.headline_text};

        &:hover {
          color: ${(props) => props.theme.color.butterscotch};
        }
      }
    }
  }

  hr {
    margin-top: 5px;
    height: 3px;
    border: none;
    background: #eaf4f4;
  }

  .cards {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 8rem;
  }

  @media only screen and (max-width: 768px) {
    .title {
      flex-direction: column;

      .cv {
        font-size: 18px;

        a {
          color: ${(props) => props.theme.color.butterscotch};
        }
      }
    }

    .cards {
      gap: 6rem;
    }
  }
`;

function Academics() {
  return (
    <AcademicPageStyle className="pageContainer">
      <div className="title">
        <h2>Academic Records</h2>

        <div className="cv">
          <a href={pdfs.cv} target="_blank" rel="noreferrer">
            Download CV <FaFileDownload />
          </a>
        </div>
      </div>

      <hr />

      <div className="cards">
        <div>
          <AcRecordCard
            degree="Bachelor"
            institute="Bangabandhu Sheikh Mujibur Rahman Science and Technology University (BSMRSTU)"
            dept="Faculty of Life Science, Department of Biotechnology and Genetic Engineering"
            session="2016-17"
            graduated="Feb, 2022"
            info="We were the department's second batch. The anticipated graduation date was December 31, 2020, but sadly, covid-19 takes longer than 1.5 years."
            Img={images.bsmrstu}
          />
        </div>

        <div>
          <AcRecordCard
            degree="Secondary College (11th & 12th)"
            institute="Cantonment College, Jessore"
            dept="Science (A)"
            session="2015-16"
            graduated="Aug, 2015"
            info="The cantonment board and the Bangladesh Army regulates Cantonment College, Jashore. The two years spent in this college provide a wealth of recollections."
            Img={images.ccj}
          />
        </div>
      </div>
    </AcademicPageStyle>
  );
}

export default Academics;
