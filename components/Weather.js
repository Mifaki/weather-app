import React from "react";

const Weather = ({ data }) => {
  if (data.location) {
    console.log(data);
  }
  return <div>Weather</div>;
};

export default Weather;
