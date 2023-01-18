import React from "react";
import Symbol1 from "../assets/Symbols/Symbol001.png";

const TextOptions = ({
  onTitleUpdate,
  onBodyUpdate,
  body,
  onTypeUpdate,
  onCostUpdate,
  onAttackUpdate,
  onDefenseUpdate,
  onAddSymbol,
}) => {
  return (
    <div className="TextOptions">
      <h5 style={{ color: "white", margin: "4px" }}>TITLE</h5>
      <input className="TitleInput" type="text-box" onChange={onTitleUpdate} />
      <div className="CardInputStats">
        <div>
          <h5 className="Header-Text">COST</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onCostUpdate}
          />
        </div>
        <div>
          <h5 className="Header-Text">ATK</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onAttackUpdate}
          />
        </div>
        <div>
          <h5 className="Header-Text">DEF</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onDefenseUpdate}
          />
        </div>
      </div>
      <h5 className="Header-Text">BODY</h5>
      <div>
        <div>
          <img
            style={{ margin: "0px", height: "25px" }}
            src="https://jonathanvandyke.github.io/hostImages/Symbol001.png"
          />
        </div>
        <button
          style={{ margin: "0px" }}
          onClick={onAddSymbol}
          value={
            "<img style='width:16px' src='https://jonathanvandyke.github.io/hostImages/Symbol001.png' />"
          }
        >
          Add
        </button>
      </div>
      <textarea
        className="BodyInput"
        onChange={onBodyUpdate}
        rows="6"
        cols="80"
        value={body}
      />
      <h5 style={{ color: "white", margin: "4px" }}>TYPE</h5>
      <input className="TitleInput" type="text-box" onChange={onTypeUpdate} />
    </div>
  );
};

export default TextOptions;
