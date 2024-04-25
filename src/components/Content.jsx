import React from "react";
import "./../assets/css/content.css";

const Content = () => {
  return (
    <div className="content_wrapper">
      <div className="right_wrapper content_wrapper_inner">
        <h3>Kolkata West Bangal</h3>
        <p>Thusday, 05 2023</p>

        <h1 className="huge_txt">19°C</h1>
        <p className="tag">Haze</p>
        <p>Feels like 15°C</p>
      </div>
      <div className="left_wrapper content_wrapper_inner"></div>
    </div>
  );
};

export default Content;
