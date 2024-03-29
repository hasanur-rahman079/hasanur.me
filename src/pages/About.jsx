import React from "react";
import styled from "styled-components";
import { images } from "../constants";
import { Ptext } from "../components";
import { Link } from "react-router-dom";
import Academic from "../components/Academic";
import SEO from "../lib/SEO";

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
    <>
      <SEO pageTitle="About" />

      <AboutPageStyle className="pageContainer">
        <div>
          <div className="contents">
            <div className="left">
              <h2>About Me</h2>

              <hr />

              <Ptext>
                Hey, I'm MD. Hasanur Rahman, Welcome to my digital garden, where
                I share my projects, academic papers, and other things that I'd
                like to share with the world.
                <br />
                <br />
                Check out the <Link to="/research">research</Link> page for all
                the research articles I’ve worked on. Most of my working areas
                are on Cancer, Alzheimer's Disease and Drug designing.
                <br />
                <br />
                My sole motivation for creating this website is to connect with
                new individuals while also documenting my learnings for future
                reference. There are no advertisements or affiliate connections
                on my website. I have written some learning articles and they’ll
                publish soon here.
                <br />
                <br />
                To say hello, send me an email. Additionally, you can follow me
                on social media. All of the links can be found on the{" "}
                <Link to="/contact">contact page</Link>. I enjoy getting to know
                new individuals.
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
                <i>Updated November 15, 2022</i>
                <br />
                <br />
                Not much exciting is happening in my life right now. I received
                my graduate degree the last February 2022 and got a scholarship
                in July from Kyung Hee university for pursuing MSc in the Cancer
                Preventive Materials Development department. And will be joining
                this December.
                <br />
                <br />I have an immense interest in coding and love to write
                code in Javascript and Python languages. I use ReactJs, NextJs,
                and Django and have built some applications on them. You may
                find it on the
                <a href="https://exomeit.com"> ExomeIT</a> projects page.
                <br />
                <br />
                Overall, I can't say that this has been my best year because a
                lot of unpleasant things have happened and my immune system has
                been unsettled. Lool! But now that things are beginning to
                settle down, I am planning to resume my research, coding, and
                social activities.
              </Ptext>
            </div>

            <div className="right">{/* <img src="" alt="" /> */}</div>
          </div>
        </div>

        <div>
          <div className="contents">
            <div className="left">
              <h2>My BSc Life</h2>

              <hr />

              <Ptext>
                After I graduated from high school with stellar grades, it
                appears that my educational curves are beginning to fall. My
                comprehension of the connection between the lecture in class and
                the application in real life may be the cause. I always give the
                practical application of what I'm learning top priority. That is
                why I spent time in the bioinformatics areas and learned
                programming languages like Python and JavaScript.
                <br />
                <br />
                Find my Educational records on the
                <Link to="/academic"> Academic</Link> page
              </Ptext>
            </div>

            <div className="right">{/* <img src="" alt="" /> */}</div>
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
                national and international organizations; you may find the
                records on{" "}
                <Link to="/experiences">Professional Activities</Link> page.
                Most of them were non-profit organizations, and I was involved
                as a volunteer.
              </Ptext>
            </div>

            <div className="right">{/* <img src="" alt="" /> */}</div>
          </div>
        </div>

        <div>
          <div className="contents">
            <div className="left">
              <h2>Talks</h2>

              <hr />

              <Ptext>
                I delivered a session talk as a guest speaker on the topic of
                “Data Visualization” at Community of Biotechnology (COB)
                Genomics and Bioinformatics workshop, 21, Dec 2019, Dhaka
                Bangladesh.
              </Ptext>
            </div>

            <div className="right">{/* <img src="" alt="" /> */}</div>
          </div>
        </div>

        <Academic />
      </AboutPageStyle>
    </>
  );
}
