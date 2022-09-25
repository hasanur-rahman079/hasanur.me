import React from "react";

function DiBadge({ doi }) {
  return (
    <div>
      <span
        className="__dimensions_badge_embed__"
        data-doi={doi}
        data-style="small_circle"
      ></span>
    </div>
  );
}

export default DiBadge;
