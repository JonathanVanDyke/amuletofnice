import React from "react";

const TextOptions = ({ onTitleUpdate, onBodyUpdate }) => {

  return (
    <div className="TextOptions">
      <h5 style={{color: "white"}}>
        TITLE
      </h5>
      <input 
        className="TitleInput"
        type="text-box" 
        onChange={onTitleUpdate}
        />
      <h5 style={{ color: "white" }}>
        BODY
      </h5>
      <textarea
        className="BodyInput"
        onChange={onBodyUpdate}
        rows="6"
        cols="80"
      />
    </div>
  )
}

export default TextOptions