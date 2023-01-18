import React from "react";

const AddImageInline = ({ onAddSymbol, imgUrl }) => {
  return (
    <div className="Image-Inline">
      <div>
        <img style={{ margin: "0px", height: "25px" }} src={imgUrl} />
      </div>
      <button
        style={{ margin: "0px" }}
        onClick={onAddSymbol}
        value={`<img style='width:16px' src=${imgUrl} />`}
      >
        Add
      </button>
    </div>
  );
};

export default AddImageInline;
