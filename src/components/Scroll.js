import React from "react";
import "./Scroll.css"

const Scroll = (props) => {
  return (
    <div className="style-4" style={{ overflowY: "scroll", height: "800px" }}>{props.children}</div>
  );
};

export default Scroll;
