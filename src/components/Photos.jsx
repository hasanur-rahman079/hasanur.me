import React from "react";
import styled from "styled-components";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryItem, LightgalleryProvider } from "react-lightgallery";

const PhotosStyle = styled.div`
  img {
    border-radius: 5px;
  }
`;

function Photos({ photo }) {
  return (
    <PhotosStyle>
      <LightgalleryProvider>
        <LightgalleryItem group="any" src={photo}>
          <a href={photo}>
            <img src={photo} alt="" />
          </a>
        </LightgalleryItem>
      </LightgalleryProvider>
    </PhotosStyle>
  );
}

export default Photos;
