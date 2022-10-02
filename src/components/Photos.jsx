import React from "react";
import styled from "styled-components";

const PhotosStyle = styled.div`
  img {
    border-radius: 5px;
  }
`;

function Photos({ photo }) {
  return (
    <PhotosStyle>
      <img src={photo} alt="" />
    </PhotosStyle>
  );
}

export default Photos;
