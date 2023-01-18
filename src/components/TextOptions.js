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
  onKeyDown,
  onMouseUp,
  onFocus,
  onBlur,
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
      <div style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>
        Type codes below for symbols
      </div>
      <div style={{ color: "yellow", marginTop: "5px", fontSize: "15px" }}>
        *for some reason they won't show up on
      </div>
      <div style={{ color: "yellow", marginTop: "5px", fontSize: "15px" }}>
        the downloaded image, so you'll need
      </div>
      <div style={{ color: "yellow", marginTop: "5px", fontSize: "15px" }}>
        to screenshot manually for now.
      </div>
      <div className="Symbol-Tray">
        <AddImageInline
          code={"$res$"}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol001.png"}
        />
        <AddImageInline
          code={"$atk$"}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol002.png"}
        />
        <AddImageInline
          code={"$hp$"}
          imgUrl={"https://jonathanvandyke.github.io/hostImages/Symbol003.png"}
        />
      </div>

      <textarea
        className="BodyInput"
        onChange={onBodyUpdate}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onMouseUp={onMouseUp}
        onFocus={onFocus}
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
