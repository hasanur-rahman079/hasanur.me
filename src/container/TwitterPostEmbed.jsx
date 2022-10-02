import React from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterPostEmbedStyles = styled.div`
  margin-top: 3rem;

  #twitter-widget-1 {
    width: 100% !important;
    height: 900px !important;
    margin: 0 auto !important;

    .timeline-Viewport {
      height: 900px !important;

      .timeline-TweetList {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;

        li {
          width: 100px !important;
        }
      }
    }
  }
`;

function TwitterPostEmbed() {
  return (
    <TwitterPostEmbedStyles>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="hasanur069"
        options={{ height: 400 }}
      />
    </TwitterPostEmbedStyles>
  );
}

export default TwitterPostEmbed;
