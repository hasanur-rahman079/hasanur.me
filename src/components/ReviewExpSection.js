import React from "react";
import ExpItems from "./ReviewExpItems";
import styled from "styled-components";
import reviews from "../assets/data/reviewexp";

const ReviewExpSectionStyle = styled.div`
  .expsecItems {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 30px;
  }

  @media only screen and (max-width: 768px) {
    .expsecItems {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ReviewExpSection() {
  return (
    <ReviewExpSectionStyle>
      <div className="expsecItems">
        {reviews.map((review) => {
          return (
            <ExpItems
              title={review.title}
              journal={review.journal}
              website={review.website}
              credentials={review.credentials}
              date={review.date}
              articles={review.articles}
            />
          );
        })}
      </div>
    </ReviewExpSectionStyle>
  );
}
