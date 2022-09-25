import React from "react";

function ExLink({ url, title }) {
  return (
    <div>
      <a className="doi" href={url} target="__blank">
        {title}
      </a>
    </div>
  );
}

export default ExLink;
