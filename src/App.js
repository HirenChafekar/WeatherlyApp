import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [citySearchRes, setCitySearchRes] = useState([]);
  return (
    <div className="main_container">
      <p className="title">Know your city's Weather</p>
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        citySearchRes={citySearchRes}
        setCitySearchRes={setCitySearchRes}
      />
    </div>
  );
}

export default App;
