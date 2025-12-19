import React, { useState } from "react";
import { TypeHand } from "../context/typeContext";
import { useNavigate } from "react-router-dom";
import "../styles/custom.css";
import typeData from "../type_data.json";

function Buttons() {
  const [data] = useState(typeData["type_list"]);
  const { type, setType } = TypeHand();
  const navigate = useNavigate();

  function goList(type) {
    setType(type);
    navigate(`/type-${type}`);
  }

  return (
    <>
      <div className="button-container">
        <ul className="nav-list">
          {data.map((con, i) => (
            <li key={i} className="nav-item">
              <button
                key={i}
                className={`button btn-custom ${con.type}`}
                id={con.type}
                onClick={() => goList(con.type)}
              >
                {con.type}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Buttons;
