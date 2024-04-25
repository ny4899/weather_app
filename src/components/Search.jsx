import React from "react";
import "./../assets/css/search.css";
import searchIcon from "./../assets/svgs/search-svgrepo-com 1.svg";

const Search = ({ placeholder, onChange }) => {
  return (
    <form className="search_wrapper">
      <div className="icon_box">
        <img src={searchIcon} alt="" />
      </div>
      <input
        type="text"
        className="search_input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
