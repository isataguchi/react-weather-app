import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="weatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          {" "}
          <strong>°C</strong> |{" "}
          <a
            href="/"
            onClick={convertToFahrenheit}
            title="Click here for temperature in Fahrenheit"
          >
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span className="weatherTemperature">
        <span className="temperature">{fahrenheit}</span>
        <span className="unit">
          {" "}
          <a
            href="/"
            onClick={convertToCelsius}
            title="Click here for temperature in Celsius"
          >
            °C{" "}
          </a>
          | <strong>°F</strong>
        </span>
      </span>
    );
  }
}
