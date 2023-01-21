import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Putcode,
  Doi,
  Pulmx,
  DiBadge,
  Altmetric,
  Loading,
} from "../../components";
// import SkeletonArticle from "../../skeletons/SkeletonArticle";

const PubItemsStyles = styled.div`
  .total__Pub {
    font-size: 22px;
    color: ${(props) => props.theme.color.headline_text};
    margin-bottom: 1rem;
  }

  .pubItems_info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5rem;

    .allPub {
      display: grid;

      .pubContainer {
        display: grid;
        padding: 1.2em;
        border-radius: 0.5rem;
        background-color: ${(props) => props.theme.color.bg_dark};
        color: ${(props) => props.theme.color.card_text};

        &:hover {
          background-color: ${(props) => props.theme.color.gray_1};
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;

          .typeTag {
            font-size: 15px;
          }

          .journal {
            font-size: 15px;
            font-weight: 500;
            font-style: italic;
            text-align: end;
          }

          .date {
            font-size: 15px;
          }
        }

        .cardBody {
          margin: 1rem 0;

          .pubtitle {
            font-size: 1.8rem;
            line-height: 28px;
            font-weight: 700;
            color: ${(props) => props.theme.color.headline_text};
          }

          .authors {
            .authorsList {
              font-size: 1.5rem;
              line-height: 16px;
            }
          }
        }

        .cardFooter {
          .metrics {
            margin-top: 5px;

            .contents {
              display: flex;
              justify-content: space-between;
              align-items: center;

              span {
                font-size: 1.4rem;
                font-weight: 500;
              }

              .icons {
                display: flex;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .total__Pub {
      font-size: 20px;
    }

    .pubItems_info {
      display: grid;
      grid-template-columns: 1fr;

      .allPub {
        .pubContainer {
          .cardHeader {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-row-gap: 1rem;

            .typeTag {
              display: grid;
              grid-column: 1/2;
              grid-row: 1/2;
            }

            .pubDate {
              display: flex;
              grid-column: 2/3;
              grid-row: 1/2;
              justify-content: end;
            }

            .journal {
              display: grid;
              grid-row: 2/3;
              grid-column: 1/3;
              justify-content: start;
              text-align: start;
            }
          }

          .cardBody {
            margin: 1.6rem 0;

            .pubtitle {
              font-size: 1.8rem;
              line-height: 28px;
            }

            .authors {
              .authorsList {
                font-size: 1.4rem;
                line-height: 16px;
              }
            }
          }

          .cardFooter {
            .metrics {
              .contents {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1rem;

                .doi {
                  display: grid;
                  grid-column: 1/2;
                }

                .icons {
                  display: flex;
                  grid-column: 1/2;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function PubCard() {
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

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const res = await axios.get(
  //       "https://pub.orcid.org/v3.0/0000-0001-9238-3149/works",
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     const dataOut = await res.json();
  //     setwork(dataOut.data.group);
  //   }, 5000);
  // });

  // console.log(work.length);

  // console.log(work);

  if (loading) {
    return <Loading />;
  }

  return (
    <PubItemsStyles>
      <h2 className="total__Pub">Total Publications: {work.length}</h2>

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
                  <div className="cardHeader">
                    <span className="typeTag">
                      {pub.type.replaceAll("-", " ").charAt(0).toUpperCase() +
                        pub.type.replaceAll("-", " ").slice(1)}
                    </span>

                    <div className="pubDate">
                      <span className="date">{(pdate.day || []).value}</span>-
                      <span className="date">{(pdate.month || []).value}</span>-
                      <span className="date">{(pdate.year || []).value}</span>
                    </div>

                    <p className="journal">
                      <span className="jName">{(jtitle || []).value}</span>
                    </p>
                  </div>

                  <div className="cardBody">
                    <h3 className="pubtitle">{pub.title.title.value}</h3>

                    <Putcode putCodePath={authors} />
                  </div>

                  <div className="cardFooter">
                    <div className="metrics">
                      {ids["external-id"] &&
                        ids["external-id"].map((doi, index) => {
                          // const doiurl = doi["external-id-url"];
                          const idType = doi["external-id-type"];
                          const doivalue = doi["external-id-value"];

                          // console.log(doi);

                          return (
                            <div key={index}>
                              {idType === "doi" ? (
                                <div className="contents">
                                  <div className="doi">
                                    <Doi title={doivalue} link={doivalue} />
                                  </div>

                                  <div className="icons">
                                    <span>Citations & Metrics: </span>

                                    <Pulmx doiUrl={doivalue} />

                                    <DiBadge doi={doivalue} />

                                    <Altmetric doi={doivalue} />
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </PubItemsStyles>
  );
}
