import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PutcodeStyle = styled.div`
  margin: 1rem 0;

  .authors {
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 400;
    margin: 14px 0;
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
              <div className="d-flex flex-wrap" key={index}>
                {name &&
                  name.map((names, index) => {
                    const nameList = names["credit-name"];
                    //   console.log(nameList.value);

                    return (
                      <div key={index} className="d-flex flex-wrap flex-row">
                        <span className="authors m-1">
                          {index ? ", " : ""}
                          {nameList.value}
                        </span>
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
