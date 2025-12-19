import React from "react";
import ballSpiner from "../images/Pokeball-PNG.png";

function Spinner() {
  return (
    <>
      <div className="spinner-container container text-center">
        <img src={ballSpiner} className="spinner" width="250px" />
        <h1>Loading Data...</h1>
      </div>
    </>
  );
}

export default Spinner;
