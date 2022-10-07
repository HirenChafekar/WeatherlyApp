import React, { useState } from "react";
import ExtraDetails from "./ExtraDetails";
import Svgs from "./Svgs";

const SearchResult = () => {
  const [tempOption, setTempOption] = useState(1);
  const [data, setData] = useState([
    {
      type: "Sunrise",
      iconpath: "sunrise",
      value: "6:12AM",
    },
    {
      type: "Sunset",
      iconpath: "sunset",
      value: "6:45PM",
    },
    {
      type: "Wind",
      iconpath: "wind",
      value: "3.1m/s",
    },
    {
      type: "Humidity",
      iconpath: "humidity",
      value: "94%",
    },
  ]);
  return (
    <div className="searchresult__main">
      <div className="searchresult__temp_data_div">
        <p className="searchresult__temp_num">21°</p>
        <div className="searchresult__temp_div">
          <div className="searchresult__temp_type_div">
            <p>C</p>
            <p style={{ marginLeft: "1px" }}>F</p>
          </div>
          <div className="searchresult__temp_city_time">
            <p>Sep 11, 04:47pm</p>
            <p>Bengaluru, IN</p>
          </div>
        </div>
      </div>
      <div className="searchresult__feels_like">
        <Svgs src="night_rain" />
        <p>Feels like 26°C. Light rain. Gentle Breeze </p>
      </div>
      <div className="searchresult__temp_chart">
        <div className="searchresult__days_options">
          <p className={`${tempOption === 1 && 'selected'}`} onClick={() => setTempOption(1)}>Today</p>
          <p className={`${tempOption === 2 && 'selected'}`} onClick={() => setTempOption(2)}>Tomorrow</p>
          <p className={`${tempOption === 3 && 'selected'}`} onClick={() => setTempOption(3)}>10 days</p>
        </div>
      </div>
      <div className="searchresult__other_details">
        {data.map((indi, index) => {
          return (
            <ExtraDetails
              key={index}
              type={indi.type}
              iconpath={indi.iconpath}
              value={indi.value}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
