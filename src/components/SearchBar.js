import React, { useState } from "react";
const SearchBar = ({ searchHandler }) => {
  let searchKey="";
  const changeHandler = (e) => {
    searchKey=e.target.value;
    searchHandler(searchKey);
  };
  return (
    <input
      className="input search"
      type={"text"}
      placeholder="Search in transactions"
      onChange={(e)=>changeHandler(e)}
    />
  );
};

export default SearchBar;
