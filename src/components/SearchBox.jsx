import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SearchBox = ({
  searchValue,
  setSearchValue,
  citySearchRes,
  setCitySearchRes
}) => {
  const [noResStatement, setNoResStatement] = useState("Please search");
  function SearchForCity() {
    if (searchValue === "") {
      setCitySearchRes([]); //make the search array empty
      setNoResStatement("Please Enter something");
    }
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=3&appid=${process.env.REACT_APP_API}`;
    axios.get(url).then((res) => {
      console.log("response from API ==>", res);
      setCitySearchRes(res && res.data);
      if (res.data.length > 0) setNoResStatement("");
      else setNoResStatement("No Results :(");
    });
  }

  return (
    <div>
      <div className="search_container">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter your City Name"
        />
        <button onClick={SearchForCity}> Search </button>
      </div>
      {citySearchRes.length > 0 && (
        <div className="search_result">
          {citySearchRes &&
            citySearchRes.map((city) => (
              <Link
                key={`${city.name}${city.state}${city.country}`}
                className="citySearchRes"
                to={`/searchResult/${city.lat}/${city.lon}`}
              >
                <span>{city.name}</span>
                <span>
                  {city.state},{city.country}
                </span>
              </Link>
            ))}
        </div>
      )}
      {/* when my api result is empty */}
      {citySearchRes.length === 0 && noResStatement}
    </div>
  );
};

export default SearchBox;
