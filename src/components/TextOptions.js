import React from "react";

const TextOptions = ({ onTitleUpdate, onBodyUpdate, onTypeUpdate }) => {
  return (
    <div className="TextOptions">
      <h5 style={{ color: "white", margin: "4px" }}>TITLE</h5>
      <input className="TitleInput" type="text-box" onChange={onTitleUpdate} />
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
