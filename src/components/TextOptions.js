import React from "react";
import AddImageInline from "./TextHelpers/AddImageInline";

const TextOptions = ({
  onTitleUpdate,
  onBodyUpdate,
  maskedBody,
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
      <div className="Symbol-Tray">
        <AddImageInline
          onAddSymbol={onAddSymbol}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol001.png"}
        />
        <AddImageInline
          onAddSymbol={onAddSymbol}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol002.png"}
        />
        <AddImageInline
          onAddSymbol={onAddSymbol}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol003.png"}
        />
      </div>

      <textarea
        className="BodyInput"
        onChange={onBodyUpdate}
        rows="6"
        cols="80"
        value={maskedBody}
      />
      <h5 style={{ color: "white", margin: "4px" }}>TYPE</h5>
      <input className="TitleInput" type="text-box" onChange={onTypeUpdate} />
    </div>
  );
};

export default TextOptions;
