import React, { useState } from "react";

import "./search.styles.css";

import { BsSearch } from "react-icons/bs";
import { useActions } from "../../hooks/useActions";

const Search = () => {
  const [value, setValue] = useState("");
  const { fetchWeather } = useActions();
  return (
    <div style={{ position: "relative" }}>
      <input
        className="inputCity"
        placeholder="Your City"
        value={value} //* for test change to 123
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="btnFetch" onClick={() => fetchWeather(value)}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
