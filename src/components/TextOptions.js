import React from "react";

const TextOptions = ({
  onTitleUpdate,
  onBodyUpdate,
  onTypeUpdate,
  onCostUpdate,
  onAttackUpdate,
  onDefenseUpdate,
}) => {
  return (
    <div className="TextOptions">
      <h5 style={{ color: "white", margin: "4px" }}>TITLE</h5>
      <input className="TitleInput" type="text-box" onChange={onTitleUpdate} />
      <div className="CardInputStats">
        <div>
          <h5 style={{ color: "white", margin: "4px" }}>COST</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onCostUpdate}
          />
        </div>
        <div>
          <h5 style={{ color: "white", margin: "4px" }}>ATK</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onAttackUpdate}
          />
        </div>
        <div>
          <h5 style={{ color: "white", margin: "4px" }}>DEF</h5>
          <input
            className="CostInput"
            type="text-box"
            onChange={onDefenseUpdate}
          />
        </div>
      </div>
      <h5 style={{ color: "white", margin: "4px" }}>BODY</h5>
      <textarea
        className="BodyInput"
        onChange={onBodyUpdate}
        rows="6"
        cols="80"
      />
      <h5 style={{ color: "white", margin: "4px" }}>TYPE</h5>
      <input className="TitleInput" type="text-box" onChange={onTypeUpdate} />
    </div>
  );
};

export default TextOptions;
