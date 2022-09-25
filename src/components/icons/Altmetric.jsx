import React from "react";

function Altmetric({ doi }) {
  return (
    <div>
      <div
        className="altmetric-embed"
        data-badge-type="donut"
        data-doi={doi}
      ></div>
    </div>
  );
}

export default Altmetric;
