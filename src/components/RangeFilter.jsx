import React, { useEffect, useState } from "react";
import { pokeHand } from "../context/apiContext";
import { numberHand } from "../context/rangeContext";
import { RegionHand } from "../context/regionContext";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";
import Spinner from "./Spinner";
import axios from "axios";

function RangeFilter() {
  const { poke, setPoke } = pokeHand();
  const { numbers, setNumbers } = numberHand();
  const { reg, setRegion } = RegionHand();
  const navigate = useNavigate();
  const [showSpinner, setShow] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setPoke([]);
    async function getData() {
      for (let i = numbers[0]; i <= numbers[1]; i++) {
        await axios
          .get("https://pokeapi.co/api/v2/pokemon/" + i, { signal })
          .then((res) => {
            var jsonResponse = res.data;
            setPoke((current) => [...current, jsonResponse]);
          })
          .catch((err) => {
            if (axios.isCancel(err)) {
              console.log("Request cancelled:", err.message);
            } else {
              console.error("Error fetching data:", err);
            }
          });
      }
      setShow(false);
    }
    getData();
    return () => {
      controller.abort();
    };
  }, []);

  const goBack = () => {
    navigate("/");
    setShow(true);
  };

  function PokeID(id) {
    let pokeId = id.toString();
    if (pokeId.length === 1) {
      pokeId = "00" + pokeId;
      return pokeId;
    } else if (pokeId.length === 2) {
      pokeId = "0" + pokeId;
      return pokeId;
    }
    return pokeId;
  }

  function Types(types) {
    let type = types.map(
      (type) =>
        `<p class="${type.type.name} type text-center">${type.type.name}</p>`
    );
    type = type.join("");
    return type;
  }

  function PkmnHeight(height) {
    let pkmnHeight = height.toString();
    if (pkmnHeight.length === 1) {
      pkmnHeight = "0," + pkmnHeight;
      return pkmnHeight;
    } else if (pkmnHeight.length === 2) {
      pkmnHeight = pkmnHeight[0] + "," + pkmnHeight[1];
      return pkmnHeight;
    } else if (pkmnHeight.length === 3) {
      pkmnHeight = pkmnHeight.slice(0, 2) + "," + pkmnHeight.slice(2);
      return pkmnHeight;
    }
  }

  function PkmnWeight(weight) {
    let pkmnWeight = weight.toString();
    if (pkmnWeight.length === 1) {
      pkmnWeight = "0," + pkmnWeight;
      return pkmnWeight;
    } else if (pkmnWeight.length === 2) {
      pkmnWeight = pkmnWeight[0] + "," + pkmnWeight[1];
      return pkmnWeight;
    } else if (pkmnWeight.length === 3) {
      pkmnWeight = pkmnWeight.slice(0, 2) + "," + pkmnWeight.slice(2);
      return pkmnWeight;
    } else if (pkmnWeight.length === 4) {
      pkmnWeight = pkmnWeight.slice(0, 3) + "," + pkmnWeight.slice(3);
      return pkmnWeight;
    }
  }

  function Abilities(abil) {
    let habs = abil.map(
      (hab) =>
        `<p class="habilidad">${
          hab.is_hidden ? "Hidden Ability" : "Ability"
        }: ${hab.ability.name}</p>`
    );
    habs = habs.join("");
    return habs;
  }

  return (
    <>
      <div className="min-vh-100 bg-dark text-white">
        <header
          className={`navbar navbar-expand-lg bd-navbar sticky-top rounded ${reg}`}
        >
          <nav className="container text-center">
            <div className="col">
              {reg != "national" ? (
                <h5>{reg} Region</h5>
              ) : (
                <h5>National PokéDex</h5>
              )}
            </div>
            <h4 className="col px-3">Total Results: {poke.length}</h4>
            <div className="col">
              <button className="btn btn-light" onClick={goBack}>
                Back
              </button>
            </div>
          </nav>
        </header>
        <div className="container py-4">
          {showSpinner ? (
            <Spinner />
          ) : (
            <div id="poke-list" className="row row-cols-1 row-cols-md-3 gy-4">
              {poke?.map((pkmn) => (
                <Cards
                  key={pkmn.id}
                  ID={PokeID(pkmn.id)}
                  IMG={pkmn.sprites.other["home"].front_default}
                  Shiny={pkmn.sprites.other["home"].front_shiny}
                  Name={pkmn.name}
                  Types={Types(pkmn.types)}
                  Height={PkmnHeight(pkmn.height)}
                  Weight={PkmnWeight(pkmn.weight)}
                  Abilities={Abilities(pkmn.abilities)}
                  Cry={pkmn.cries.latest}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default RangeFilter;
