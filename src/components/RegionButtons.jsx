import React from "react";
import { useNavigate } from "react-router-dom";
import { numberHand } from "../context/rangeContext";
import { RegionHand } from "../context/regionContext";
import "../styles/custom.css";

function RegionButtons() {
  const navigate = useNavigate();
  const regionData = [
    "kanto",
    "johto",
    "hoenn",
    "sinnoh",
    "unova",
    "kalos",
    "alola",
    "galar",
    "hisui",
    "paldea",
  ];

  const { numbers, setNumbers } = numberHand();
  const { reg, setRegion } = RegionHand();

  function goRegion(region) {
    switch (region) {
      case "kanto":
        setRegion(region);
        setNumbers([1, 151]);
        break;
      case "johto":
        setRegion(region);
        setNumbers([152, 251]);
        break;
      case "hoenn":
        setRegion(region);
        setNumbers([252, 386]);
        break;
      case "sinnoh":
        setRegion(region);
        setNumbers([387, 493]);
        break;
      case "unova":
        setRegion(region);
        setNumbers([494, 649]);
        break;
      case "kalos":
        setRegion(region);
        setNumbers([650, 721]);
        break;
      case "alola":
        setRegion(region);
        setNumbers([722, 809]);
        break;
      case "galar":
        setRegion(region);
        setNumbers([810, 898]);
        break;
      case "hisui":
        setRegion(region);
        setNumbers([899, 905]);
        break;
      case "paldea":
        setRegion(region);
        setNumbers([906, 1025]);
    }
    navigate(`/region-${region}`);
  }

  return (
    <>
      <div>
        <ul className="nav-list">
          {regionData.map((region) => (
            <li key={region} className="nav-item">
              <button
                className={`button btn-custom ${region}`}
                id={region}
                onClick={() => goRegion(region)}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RegionButtons;
