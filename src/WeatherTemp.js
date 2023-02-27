import React from "react";

export default function WeatherTemp(props) {
  return (
    <span className="weatherTemperature">
      <span className="temperature">{props.data.temperature}</span>
      <span className="unit"> °C |°F </span>
    </span>
  );
}
