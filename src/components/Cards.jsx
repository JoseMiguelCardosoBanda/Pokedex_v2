import React from "react";
import Modal from "./Modal";

function Cards({
  ID,
  IMG,
  Shiny,
  Name,
  Types,
  Height,
  Weight,
  Abilities,
  Cry,
}) {
  function showModal() {
    const pokeCry = new Audio(Cry);
    pokeCry.play();
  }

  return (
    <>
      <div className="col">
        <div
          className="card text-center bg-info border-light mb-3"
          style={{ maxWidth: "18rem" }}
          onClick={() => showModal()}
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop-${ID}`}
        >
          <div className="card-header bg-danger">
            <h5 style={{ color: "white" }}>#{ID}</h5>
          </div>
          <img src={IMG} className="card-img-top" alt={Name} />
          <div className="card-footer bg-success">
            <h5 style={{ color: "white" }}>{Name}</h5>
          </div>
        </div>
      </div>
      <Modal
        pokeIMG={IMG}
        pokeShiny={Shiny}
        pokeID={ID}
        pokeName={Name}
        pokeTypes={Types}
        pokeHeight={Height}
        pokeWeight={Weight}
        pokeAbilities={Abilities}
      />
    </>
  );
}

export default Cards;
