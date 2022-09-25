import React from "react";
import styled from "styled-components";

const DownloadStyle = styled.div`
  .downloadbtn {
    padding: 0.7em 1.8em;
    font-size: 2.2rem;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid ${(props) => props.theme.color.gray_1};

    a {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

function DownloadButton() {
  return (
    <DownloadStyle>
      <div className="downloadbtn">
        <a
          href={require("../assets/pdf/Hasan_CV_updated July.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          View Academic CV
        </a>
      </div>
    </DownloadStyle>
  );
}

export default DownloadButton;
