import React from "react";
import "./../assets/css/content.css";
import formatDate from "../utils/formatData";

const getTemp = (temp) => (temp * 1 - 273.15).toFixed(1);
const na = "n/a";

const Content = ({ data }) => {
  return (
    <div className="content_wrapper">
      <div className="right_wrapper">
        <h3 className="city t_style">{data?.name ?? na}</h3>
        <p className="date t_style_trans">{formatDate(Date.now()) ?? na}</p>
        <h1 className="huge_txt t_style">{getTemp(data.main.temp)}°C</h1>
        <div className="tag_wrapper">
          <p className="tag t_style">{data.weather[0]?.main ?? na}</p>
        </div>
        <p className="feels_like t_style">
          Feels like {getTemp(data.main.feels_like)}°C
        </p>
      </div>
      <div className="left_wrapper">
        <div className="details_box">
          <p>
            <span className="digit">{data?.wind?.speed ?? na}</span>
            <span className="title">Wind speed</span>
          </p>
        </div>
        <div className="details_box">
          <p>
            <span className="digit">{data?.main?.humidity ?? na}</span>
            <span className="title">Humidity</span>
          </p>
        </div>
        <div className="details_box">
          <p>
            <span className="digit">{data.visibility}</span>
            <span className="title">Visibility</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
