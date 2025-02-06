import React, { useState } from "react";
import "./style.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({ handleChange }) {

  return (
    <div className="search-flex">

      <SearchRoundedIcon />
      <input
        className="search-input"
        placeholder="Search"



        onChange={(e) => handleChange(e)}

      />
    </div>
  );
}

export default Search;