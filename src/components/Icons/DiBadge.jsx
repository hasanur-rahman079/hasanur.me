import React from "react";
import { Helmet } from "react-helmet-async";

function DiBadge({ doi }) {
  return (
    <>
      <Helmet>
        {/* Dimention badge */}
        <script
          async
          src="https://badge.dimensions.ai/badge.js"
          charset="utf-8"
        ></script>
      </Helmet>

      <span
        className="__dimensions_badge_embed__"
        data-doi={doi}
        data-style="large_rectangle"
      >
       
      </span>
    </>
  );
}

export default DiBadge;
