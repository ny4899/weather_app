import React from "react";
import "./../assets/css/error.css";
const Error = ({ txt }) => {
  return (
    <div className="error_wrapper">
      <h4>{txt}</h4>
    </div>
  );
};

export default Error;
