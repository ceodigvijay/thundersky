import React from "react";
import ForecastDay from "./ForecastDay";
import "./style.css";

function forecast(props) {
  return (
    <div id="forecast">
      {props.forecast.map((item, index) => {
        return (
          <ForecastDay
            key={index}
            day={item.day}
            date={item.date}
            low={item.low}
            high={item.high}
            text={item.text}
            code={item.code}
          />
        );
      })}
    </div>
  );
}

export default forecast;
