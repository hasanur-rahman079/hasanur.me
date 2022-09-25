import React from "react";

function Pulmx({ doiUrl }) {
  return (
    <div>
      <a
        href={`https://plu.mx/plum/a/?doi=${doiUrl}`}
        className="plumx-plum-print-popup"
        target="__blank"
      >
        PulmX
      </a>
    </div>
  );
}

export default Pulmx;
