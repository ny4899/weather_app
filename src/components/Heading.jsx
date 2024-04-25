import React from "react";
import "./../assets/css/heading.css";
const Heading = ({ txt }) => {
  return (
    <div className="heading_wrapper">
      <h2>{txt}</h2>
    </div>
  );
};

export default Heading;
