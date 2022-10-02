import React from "react";
import styled from "styled-components";
import { images } from "../constants";
import { Ptext } from "../components";
import { Link } from "react-router-dom";

const AboutPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  .contents {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100%;
    margin: 0 auto;
    grid-column-gap: 2rem;

    .left {
      display: grid;
      grid-column: 1 / span 8;
      align-self: start;

      h2 {
        color: ${(props) => props.theme.color.headline_text};
        font-size: 24px;
        line-height: 32px;
      }

      hr {
        margin-top: 5px;
        height: 3px;
        border: none;
        background: #eaf4f4;
      }

      p {
        margin-top: 1rem;
        color: ${(props) => props.theme.color.p_text};
        font-size: 17px;
        line-height: 27px;
      }
    }
    .right {
      display: grid;
      grid-column: 9 / span 5;
      align-self: start;
      margin-top: 5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .contents {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;

      .left {
        display: grid;
        grid-column: 1/2;

        h2 {
          font-size: 22px;
        }

        p {
          font-size: 16px;
          line-height: 26px;
        }
      }
      .right {
        display: grid;
        grid-column: 1/2;
        margin-top: 1rem;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyle className="pageContainer">
      <div>
        <div className="contents">
          <div className="left">
            <h2>About Me</h2>

            <hr />

            <Ptext>
              Hey, I’m MD. Hasanur Rahman! Welcome to my digital garden for the
              projects I’ve created, research papers I’ve published and anything
              else I want to show the world.
              <br />
              <br />
              Check out the <Link to="/research">research</Link> page to see the
              research articles on life science I’ve worked and published. I’ve
              worked on Cancer, Alzheimer's Disease and Drug designing. I have
              some ongoing projects on submission based on In-silico studies,
              they will be added to the list when available online. I’ve
              interest to work the field of Bioinformatics.
              <br />
              <br />
              My only motivation for this site is to share what I’ve learned
              with the world and document notes for myself and hopefully
              connects with new people. My site doesn’t have any advertisement,
              affiliate links. This site only uses the google analytics so that
              I can understand how people are noticing my records.
              <br />
              <br />
              You can contact me by email to say hi! You can also follow me on
              social media. You’ll find all the links in the{" "}
              <Link to="/contact">contact</Link> page. I always appreciate
              meeting new people.
            </Ptext>
          </div>

          <div className="right">
            <img src={images.aboutImg} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="contents">
          <div className="left">
            <h2>What I’m doing now</h2>

            <hr />

            <Ptext>
              <i>Updated October 2nd, 2022</i>
              <br />
              <br />
              Nothing too exciting going on in my life now. I’ve received my
              graduation degree on the last February 2022 and got a scholarship
              on July from Kyung Hee university for pursuing MSc in Cancer
              Preventive Materials Development department. But unfortunately, my
              visa has been refused. So, preparing myself in better ways for the
              next try.
              <br />
              <br />
              Besides the preparation for better fit with world, I do code on
              JavaScript, reviewing my own submitted papers that sent for
              revisions and preparing some bioinformatics projects pipeline.
              <br />
              <br />
              Overall, this hasn’t been the greatest year for me, a lot of bad
              stuff happened and my immune system getting upsets. Lool! But
              everything is starting to stabilize, and I hope to get back into
              the swing of research, coding and being social.
            </Ptext>
          </div>

          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="contents">
          <div className="left">
            <h2>My Educationsl Records</h2>

            <hr />

            <Ptext>
              My educational curves look like getting down after I passed
              secondary education with excellent academic records. The reason
              could be my understanding between the class lecture and the
              real-world application. I always prioritize the real-world
              application of what I’m learning. That’s why programming language
              like Python and JavaScript finds my interest to focus on
              bioinformatics sector.
              <br />
              <br />
              Find my Educational records on the
              <Link to="/academic"> Academic</Link> page
            </Ptext>
          </div>

          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="contents">
          <div className="left">
            <h2>Professional Activities</h2>

            <hr />

            <Ptext>
              As I always like to meet new people, I involved myself with
              organizations that works for science related national and
              international organizations. I have worked for some renowned
              national and international organizations; you may find the records
              on <Link to="/experiences">Professional Activities</Link> page.
              Most of them were non-profit organizations, and I was involved as
              a volunteer.
            </Ptext>
          </div>

          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="contents">
          <div className="left">
            <h2>Talks</h2>

            <hr />

            <Ptext>
              I delivered a session talk as a guest speaker on the topic of
              “Data Visualization” at Community of Biotechnology (COB) Genomics
              and Bioinformatics workshop, 21, Dec 2019, Dhaka Bangladesh.
            </Ptext>
          </div>

          <div className="right">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </AboutPageStyle>
  );
}
