import React from "react";
import { Helmet } from "react-helmet-async";

function Altmetric({ doi }) {
  return (
    <>
      <Helmet>
        {/* Altmetric */}
        <script
          type="text/javascript"
          src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"
        ></script>
      </Helmet>

      <div
        data-badge-popover="left"
        data-badge-type="2"
        data-doi={doi}
        data-condensed="true"
        data-hide-no-mentions="true"
        className="altmetric-embed"
      >

      </div>
    </>
  );
}

export default Altmetric;
