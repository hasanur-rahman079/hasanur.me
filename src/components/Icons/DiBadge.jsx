import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function DiBadge({ doi }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://badge.dimensions.ai/badge.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    setScriptLoaded(true);

    return () => {
      document.body.removeChild(script);
      setScriptLoaded(false);
    };
  }, []);

  return (
    <>
      <Helmet>
        {scriptLoaded && (
          <script
            async
            src="https://badge.dimensions.ai/badge.js"
            charset="utf-8"
          ></script>
        )}
      </Helmet>

      <span
        className="__dimensions_badge_embed__"
        data-doi={doi}
        data-style="large_rectangle"
        data-legend="hover-bottom"
      ></span>
    </>
  );
}

export default DiBadge;
