import React from "react";

const TextOptions = ({ onTitleUpdate }) => {

  return (
    <div className="TextOptions">
      <h3 style={{color: "white"}}>
        TITLE
      </h3>
      <input 
        className="TitleInput"
        type="text-box" 
        onChange={onTitleUpdate}
        />
    </div>
  )
}

export default TextOptions