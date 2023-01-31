import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Pulmx({ doiUrl }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.plu.mx/widget-popup.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

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
          className="plumx-plum-print-popup plum-liberty-theme"
          data-size="medium"
          data-popup="bottom"
          data-hide-when-empty="true"
          target="__blank"
        >
          
        </a>
      </div>
    </>
  );
}

export default Pulmx;
