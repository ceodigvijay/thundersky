import React from "react";

export default function currentCity(props) {
  return <div style={{textAlign: "center", padding: "20px"}}><h1>Weather of {props.city}</h1></div>;
}
