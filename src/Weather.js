import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="WeatherInfo">
        <h1>New York</h1>
        <ul>
          <li>Wednesday, 00:57</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  alt="few clouds"
                />
              </div>

              <div>
                <span className="temperature">6</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Description: Partly cloud</li>
              <li>Humidity: 90%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
