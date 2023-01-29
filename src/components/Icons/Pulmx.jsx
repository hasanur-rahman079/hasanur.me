import React from "react";
import { Helmet } from "react-helmet-async";

function Pulmx({ doiUrl }) {
  return (
    <>
      <Helmet>
        {/* Plumx */}
        <script
          type="text/javascript"
          src="https://cdn.plu.mx/widget-popup.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <div>
        <a
          href={`https://plu.mx/plum/a/?doi=${doiUrl}`}
          className="plumx-plum-print-popup"
          data-size="medium"
          target="__blank"
        >

        </a>
      </div>
    </>
  );
}

export default Pulmx;
