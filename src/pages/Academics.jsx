import React from "react";
import styled from "styled-components";
import AcRecordCard from "../components/cards/AcaRecordCard";
import BSMRSTU from "../assets/images/bsmrstu.png";
import CCJ from "../assets/images/ccj.png";
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
        <h2>Academic Backgrounds</h2>

        <div className="cv">
          <a
            href={require("../assets/pdf/Hasan_CV_updated July.pdf")}
            target="_blank"
            rel="noreferrer"
          >
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
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus leo in adipiscing turpis enim turpis. Massa condimentum elit faucibus netus arcu curabitur sit elementum. Enim amet donec eget amet, habitant faucibus tortor mi. Bibendum sed facilisis turpis gravida augue facilisis nibh quis etiam. Fusce mattis ornare placerat rhoncus amet nunc lectus. Vehicula id neque enim"
            Img={BSMRSTU}
          />
        </div>

        <div>
          <AcRecordCard
            degree="Secondary College (11th & 12th)"
            institute="Cantonment College, Jessore"
            dept="Science (A)"
            session="2015-16"
            graduated="Aug, 2015"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus leo in adipiscing turpis enim turpis. Massa condimentum elit faucibus netus arcu curabitur sit elementum. Enim amet donec eget amet, habitant faucibus tortor mi. Bibendum sed facilisis turpis gravida augue facilisis nibh quis etiam. Fusce mattis ornare placerat rhoncus amet nunc lectus. Vehicula id neque enim"
            Img={CCJ}
          />
        </div>
      </div>
    </AcademicPageStyle>
  );
}

export default Academics;
