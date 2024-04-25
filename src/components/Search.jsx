import React, { useRef } from "react";
import "./../assets/css/search.css";
import searchIcon from "./../assets/svgs/search-svgrepo-com 1.svg";
import fetchWeather from "../utils/fetchWeather";

const Search = ({ placeholder, setData, setError, setLoading }) => {
  const queryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setData(null);

    const query = queryRef.current.value.trim();

    fetchWeather(query)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="search_wrapper">
      <div className="icon_box">
        <img src={searchIcon} alt="" />
      </div>
      <input
        ref={queryRef}
        type="text"
        className="search_input"
        placeholder={placeholder}
      />
    </form>
  );
};

export default Search;
