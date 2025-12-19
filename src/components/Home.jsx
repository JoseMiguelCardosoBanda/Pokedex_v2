import React, { useEffect, useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { numberHand } from "../context/rangeContext";
import { RegionHand } from "../context/regionContext";
import { useNavigate } from "react-router-dom";
import HelpModal from "./HelpModal";
import Buttons from "./Buttons";
import RegionButtons from "./RegionButtons";

function Home() {
  const [typeOpen, setOpen] = useState(false);
  const [regionOpen, setReg] = useState(false);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const logo = document.getElementById("logo");
  const name = "React Interactive PokéDex";
  const [firstRender, setRender] = useState(true);
  const { numbers, setNumbers } = numberHand();
  const { reg, setRegion } = RegionHand();
  const navigate = useNavigate();

  useEffect(() => {
    const shiftLetters = () => {
      if (!firstRender) {
        const wordsArray = [...name];
        printLetters(0, wordsArray);
      } else {
        setRender(false);
      }
    };
    shiftLetters();
  }, [firstRender]);

  const printLetters = (currentLetterIndex, wordsArray) => {
    if (wordsArray.length === currentLetterIndex) return;
    const spanChar = document.createElement("span");
    logo.appendChild(spanChar);
    animateChar(spanChar).then(() => {
      spanChar.innerHTML = wordsArray[currentLetterIndex];
      printLetters(currentLetterIndex + 1, wordsArray);
    });
  };

  const animateChar = (spanChar) => {
    let changes = 0;
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        spanChar.innerHTML =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        changes++;
        if (changes === 3) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  };

  const openClose = () => {
    setOpen(!typeOpen);
  };

  const regionClose = () => {
    setReg(!regionOpen);
  };

  function openNational(region) {
    setRegion("national");
    setNumbers([1, 1025]);
    navigate(`/region-${region}`);
  }

  return (
    <>
      <div className="min-vh-100 menu text-white">
        <div className="container text-center position-absolute top-50 start-50 translate-middle">
          <div className="logo-container">
            <h1 id="logo"></h1>
          </div>
          <button
            className="button btn-custom"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop-Help"
          >
            Guide
          </button>
          <div
            id="types"
            className="closed py-4 px-4"
            data-bs-toggle="collapse"
            data-bs-target="#collapseType"
            onClick={() => openClose()}
          >
            {!typeOpen ? (
              <h1>
                <BsCaretRightFill />
                Search by Types
              </h1>
            ) : (
              <h1>
                <BsCaretDownFill />
                Search by Types
              </h1>
            )}
            <div className="collapse" id="collapseType">
              <Buttons />
            </div>
          </div>
          <div
            id="regions"
            className="closed py-4 px-4 text-dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseRegion"
            onClick={() => regionClose()}
          >
            {!regionOpen ? (
              <h1>
                <BsCaretRightFill />
                Search by Regions
              </h1>
            ) : (
              <h1>
                <BsCaretDownFill />
                Search by Regions
              </h1>
            )}
            <div className="collapse" id="collapseRegion">
              <RegionButtons />
            </div>
          </div>
          <div className="py-4">
            <button
              className="button btn-custom"
              id="nationalDex"
              onClick={() => openNational("national")}
            >
              National Mode
            </button>
          </div>
        </div>
        <HelpModal />
      </div>
    </>
  );
}

export default Home;
