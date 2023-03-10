import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left d-flex">
              <div>
                <WeatherIcon code={props.data.icon} size={54} />
              </div>

              <div className="float-left">
                <WeatherTemp celsius={props.data.temperature} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
