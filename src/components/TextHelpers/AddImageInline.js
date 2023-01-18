import React from "react";

const AddImageInline = ({ imgUrl, code }) => {
  return (
    <div className="Image-Inline">
      <div>
        <img style={{ margin: "0px", height: "25px" }} src={imgUrl} />
      </div>
      <div
        style={{ color: "white", fontSize: "20px", margin: "0px" }}
        value={code}
      >
        {code}
      </div>
    </div>
  );
};

export default AddImageInline;
