import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../Spinner";
import Putcode from "./PutCode";

const PubItemsStyles = styled.div`
  .pubItems_info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    /* align-self: start; */

    .allPub {
      .pubContainer {
        display: grid;
        margin: 1rem 0;
        background-color: #282829;
        padding: 1.2em;
        border-radius: 0.5rem;
        /* align-self: start; */

        &:hover {
          background-color: ${(props) => props.theme.color.gray_2};
        }

        .typeTag {
          font-size: 14px;
          margin-bottom: 14px;
        }

        .pubtitle {
          font-family: "Helvetica Neue", sans-serif;
          font-size: 2.3rem;
          font-weight: 700;
          color: ${(props) => props.theme.color.gray_text};

          &:hover {
            color: ${(props) => props.theme.color.white};
          }
        }

        .jName {
          font-size: 1.6rem;
          font-weight: 500;
          font-style: italic;
          margin-top: 8px;
          margin-right: 10px !important;
        }

        .date {
          font-size: 1.6rem;
          margin: 8px 0;
        }

        .metrics {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;

          .doi {
            font-size: 1.6rem;
            font-weight: 500;
            text-decoration: underline;
            text-decoration-color: ${(props) => props.theme.color.butterscotch};
            text-decoration-thickness: 3px;
            margin-top: 8px;
            color: ${(props) => props.theme.color.gray_text};

            &:hover {
              color: ${(props) => props.theme.color.white};
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .pubItems_info {
      display: grid;
      grid-template-columns: auto;

      h3 {
        .pubtitle {
          font-size: 2rem;
        }
      }

      .jName {
        font-size: 1.4rem;
      }

      .jIssue,
      .impact {
        font-size: 1.4rem;
      }

      .date {
        font-size: 1.4rem;
      }

      .metrics {
        .doi {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default function PubItems() {
  const [work, setwork] = useState([]);
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);

  // using Promises
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://pub.orcid.org/v3.0/0000-0001-9238-3149/works", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => setwork(response.data.group))
      .catch((error) => setIsError(error.message))
      .finally(() => setLoading(false));
  }, []);

  // console.log(work);

  if (loading) {
    return <Loading />;
  }

  return (
    <PubItemsStyles>
      <div className="pubItems_info">
        {work &&
          work.map((works, index) => {
            const pub = works["work-summary"][0];
            const jtitle = pub["journal-title"];
            const pdate = pub["publication-date"] || [];
            const ids = pub["external-ids"];
            const authors = pub["put-code"];

            // console.log(pub);

            return (
              <div className="allPub" key={index}>
                {isError !== "" && <h2>{isError}</h2>}

                <div className="pubContainer">
                  <span className="typeTag">
                    {pub.type.replaceAll("-", " ").charAt(0).toUpperCase() +
                      pub.type.replaceAll("-", " ").slice(1)}
                  </span>
                  <h3 className="pubtitle">{pub.title.title.value}</h3>

                  <Putcode putCodePath={authors} />

                  <p className="journal">
                    <span className="jName">{(jtitle || []).value}</span>
                  </p>

                  <div className="pubDate">
                    <span className="date">{(pdate.day || []).value}</span>-
                    <span className="date">{(pdate.month || []).value}</span>-
                    <span className="date">{(pdate.year || []).value}</span>
                  </div>

                  <div className="metrics">
                    {ids["external-id"] &&
                      ids["external-id"].map((doi, index) => {
                        const doiurl = doi["external-id-url"];
                        const doivalue = doi["external-id-value"];
                        // console.log(doi);

                        return (
                          <div key={index}>
                            <a
                              className="doi"
                              href={doiurl.value}
                              target="__blank"
                            >
                              Read Article
                            </a>

                            <span>
                              <Link
                                to={`https://plu.mx/plum/a/?doi=${doivalue}`}
                                rel="noopener noreferrer"
                                className="plumx-plum-print-popup plum-bigben-theme"
                                data-size="medium"
                                data-popup="bottom"
                              />
                              {/* <a
                                href={`https://plu.mx/plum/a/?doi=${doivalue}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="plumx-plum-print-popup plum-bigben-theme"
                                data-size="medium"
                                data-popup="bottom"
                              >
                                plumx
                              </a> */}
                            </span>

                            <span
                              className="__dimensions_badge_embed__"
                              data-doi={doivalue}
                              data-style="large_rectangle"
                            ></span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </PubItemsStyles>
  );
}
