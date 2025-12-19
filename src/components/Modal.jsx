import React, { useState } from "react";

function Modal({
  pokeIMG,
  pokeShiny,
  pokeID,
  pokeName,
  pokeTypes,
  pokeHeight,
  pokeWeight,
  pokeAbilities,
}) {
  const [shiny, setShiny] = useState(false);
  return (
    <>
      <div
        className="modal fade"
        id={`staticBackdrop-${pokeID}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "crimson" }}
            >
              <div className="gray-border">
                <div className="blue-light">
                  <div className="white-reflect"></div>
                </div>
              </div>
              <div className="red-light">
                <div className="red-reflex"></div>
              </div>
              <div className="yellow-light">
                <div className="yellow-reflex"></div>
              </div>
              <div className="green-light">
                <div className="green-reflex"></div>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="border-container">
                <div className="first-red-dot"></div>
                <div className="second-red-dot"></div>
              </div>
              <div className="inside-border">
                <div className="row">
                  <div className="col text-center">
                    <img
                      className="pokeIMG"
                      src={!shiny ? pokeIMG : pokeShiny}
                      width="250px"
                    />
                  </div>
                  <div className="row">
                    <div className="col text-center poke-info">
                      <h4>#{pokeID}</h4>
                      <h4>{pokeName}</h4>
                      <h5
                        className="poke-type"
                        dangerouslySetInnerHTML={{ __html: pokeTypes }}
                      ></h5>
                      <div className="poke-dimensions">
                        <div className="dimensions">
                          <h5>{pokeHeight} m.</h5>
                        </div>
                        <div className="dimensions">
                          <h5>{pokeWeight} kg.</h5>
                        </div>
                      </div>
                      <h5
                        dangerouslySetInnerHTML={{ __html: pokeAbilities }}
                      ></h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lines-container">
                <div className="row">
                  <div className="col red-button-container">
                    <button
                      className="red-button"
                      onClick={() => setShiny(!shiny)}
                    ></button>
                  </div>
                  <div className="col lines">
                    <div className="black-line"></div>
                    <div className="black-line"></div>
                    <div className="black-line"></div>
                    <div className="black-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
