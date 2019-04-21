import React from "react";
import "./style.css";
import findIco from "./iconManage";

function todayWeather(props) {
  return (
    <div id="today-weather">
      <div className="today-detail">
        <img src={findIco(props.today.condition.code)} alt="Weather" />
      </div>
      <div className="today-detail">
        <h2>{props.today.condition.temperature}&deg;C</h2>
        <p>{props.today.condition.text}</p>
      </div>
      <div className="detail">
        <h3>Humidity: {props.today.atmosphere.humidity}</h3>
        <h3>Visibility: {props.today.atmosphere.visibility}</h3>
        <h3>Pressure: {props.today.atmosphere.pressure}</h3>
        <h3>Sunrise: {props.today.astronomy.sunrise}</h3>
        <h3>Sunset: {props.today.astronomy.sunset} </h3>
      </div>
    </div>
  );
}

export default todayWeather;
