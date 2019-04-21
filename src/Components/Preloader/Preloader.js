import React from "react";
import './preloader.css'
export default function Preloader() {
  return (
    <div>
      <div id="load-wrapper">
        <div id="loader">
          <span className="ringFour" />
          <span className="ringThree" />
          <span className="colorRing" />
          <span className="ringTwo" />
          <span className="ball" />
        </div>
      </div>
    </div>
  );
}
