import React from "react";
import findIco from './iconManage'

function forecastDay(props) {
  console.log(props.code)
  findIco(props.code)
  
  return (
    <div className="forecast-day">
      <h2 style={{ paddingBottom: "15px" }}>{props.day}</h2>
      <img src={findIco(props.code)} width="100px" height="100px" alt="forecast" />
      <h2>
        {/* {props.low}-*/}{props.high}&deg;C
      </h2>
      <p>{props.text}</p>
    </div>
  );
}

export default forecastDay;
