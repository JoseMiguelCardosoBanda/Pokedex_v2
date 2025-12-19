import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import helpImage1 from "../images/help1.png";
import helpImage2 from "../images/help2.png";

function HelpModal() {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop-Help"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
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
            <div className="modal-body text-center">
              <h4>
                To access to the different types of sort, click on the
                <BsCaretRightFill /> button, and choose the desired option.
              </h4>
              <h4>
                You can also see the full list by clicking on the{" "}
                <button className="button btn-custom" id="nationalDex">
                  National Mode
                </button>
                button.
              </h4>
              <br />
              <br />
              <h4>
                By selecting the type of sort, the results list will show, and
                after selecting a card, the following screen will show.
              </h4>
              <img src={helpImage1} width="300px" />
              <br />
              <br />
              <h4>
                The pokémon's cry will play automatically, and by clicking on
                the red button, you can alternate between the normal and shiny
                version of the pokémon.
              </h4>
              <img src={helpImage2} width="300px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpModal;
