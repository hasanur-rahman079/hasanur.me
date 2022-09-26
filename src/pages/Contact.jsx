import React from "react";
import {
  FaDev,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RiSpyFill } from "react-icons/ri";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import styled from "styled-components";
import { SocialIcon } from "../components";

const ContactStyle = styled.div`
  .grid__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: start;
    grid-row-gap: 6rem;

    .grid__col {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.color.headline_text};
      }

      .icon__container {
        display: flex;
        flex-wrap: wrap;
        align-self: start;
        grid-gap: 1.4rem;
      }

      .email__box {
        background: ${(props) => props.theme.color.bg};
        padding: 10px 20px;
        width: 400px;

        a {
          display: flex;
          align-items: center;
          font-size: 18px;
          color: ${(props) => props.theme.color.butterscotch};

          .icon {
            margin-right: 0.6rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .grid__container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

function Contact() {
  return (
    <ContactStyle className="pageContainer">
      <div className="grid__container">
        <div className="grid__col">
          <h3 className="title">Academic/Research Id's</h3>

          <div className="icon__container">
            <div>
              <SocialIcon
                url="https://scholar.google.com/citations?hl=en&authuser=1&user=l2q048wAAAAJ"
                iconCode={<SiGooglescholar />}
                name="Google Scholar"
                userName="/MD. Hasanur Rahman"
              />
            </div>

            <div>
              <SocialIcon
                url="https://www.researchgate.net/profile/Md-Rahman-262"
                iconCode={<SiResearchgate />}
                name="ResearchGate"
                userName="/MD. Hasanur Rahman"
              />
            </div>
          </div>
        </div>

        <div className="grid__col">
          <h3 className="title">Social Id's</h3>

          <div className="icon__container">
            <div>
              <SocialIcon
                url="https://www.facebook.com/hasanur069"
                iconCode={<FaFacebook />}
                name="Facebook"
                userName="/hasanur069"
              />
            </div>

            <div>
              <SocialIcon
                url="https://twitter.com/hasanur069"
                iconCode={<FaTwitter />}
                name="Twitter"
                userName="/hasanur069"
              />
            </div>

            <div>
              <SocialIcon
                url="https://www.linkedin.com/in/hasanur069/"
                iconCode={<FaLinkedin />}
                name="LinkedIn"
                userName="/hasanur069"
              />
            </div>

            <div>
              <SocialIcon
                url="https://www.instagram.com/hasanur069/"
                iconCode={<FaInstagram />}
                name="Instagram"
                userName="/hasanur069"
              />
            </div>
          </div>
        </div>

        <div className="grid__col">
          <h3 className="title">Dev Id's</h3>

          <div className="icon__container">
            <div>
              <SocialIcon
                url="https://github.com/hasanur-rahman079"
                iconCode={<FaGithub />}
                name="GitHub"
                userName="/hasanur-rahman079"
              />
            </div>

            <div>
              <SocialIcon
                url="https://dev.to/hasanurrahman079"
                iconCode={<FaDev />}
                name="DEV"
                userName="/hasanurrahman079"
              />
            </div>
          </div>
        </div>

        <div className="grid__col">
          <h3 className="title">Send anonymous texts</h3>

          <div>
            <SocialIcon
              url="https://ngl.link/hasanur069"
              iconCode={<RiSpyFill />}
              name="Anonymous"
              userName="/hasanur069"
            />
          </div>
        </div>

        <div className="grid__col">
          <h3 className="title">Email Id's</h3>

          <div className="box__container">
            <div className="email__box">
              <a href="mailto:hasanurrahman.bge@gmail.com">
                <FaEnvelope className="icon" />
                hasanurrahman.bge@gmail.com
              </a>
            </div>

            <div className="email__box">
              <a href="mailto:hasan079@bsmrstu.edu.bd">
                <FaEnvelope className="icon" />
                hasan079@bsmrstu.edu.bd
              </a>
            </div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}

export default Contact;
