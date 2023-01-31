import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PutcodeStyle = styled.div`
  margin: 1.5rem 0;

  .authors {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0.7rem;

    .authorsList {
      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 400;
    }

    .highlighted {
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 768px) {
    .authors {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
`;

function Putcode({ putCodePath }) {
  const [pcode, setPcodes] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://pub.orcid.org/v3.0/0000-0001-9238-3149/works/${putCodePath}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => setPcodes(response.data.bulk));
  }, [putCodePath]);

  return (
    <PutcodeStyle>
      <div>
        {pcode &&
          pcode.map((pcodes, index) => {
            const list = pcodes.work.contributors;
            const name = list.contributor;

            return (
              <div className="authors" key={index}>
                {name &&
                  name.map((names, index) => {
                    const nameList = names["credit-name"];
                    //   console.log(nameList.value);

                    return (
                      <div key={index}>
                        <div
                          className={`authorsList ${
                            (nameList.value === 'MD. Hasanur Rahman' || nameList.value === 'Md. Hasanur Rahman')
                              ? "highlighted"
                              : ""
                          }`}
                        >
                          {nameList.value}
                          {index !== name.length - 1 ? ", " : " "}
                        </div>
                      </div>
                    );
                  })}
                <div></div>
              </div>
            );
          })}
      </div>
    </PutcodeStyle>
  );
}

export default Putcode;
