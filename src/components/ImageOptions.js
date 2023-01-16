import React from "react";
import Dropdown from "./Dropdown";
import { BORDER_ART_LABELS } from "../constants/borderArts";

const ImageOptions = ({
  scale,
  topPos,
  rightPos,
  onSliderChange = () => {},
  onTopChange = () => {},
  onRightChange = () => {},
  onDropDownSelect = () => {},
}) => {
  return (
    <div className="Image-Options">
      <div>
        <div style={{ color: "white" }}>Scale</div>
        <input
          type="range"
          min="0"
          max="3"
          step=".01"
          value={scale}
          onChange={onSliderChange}
        />
      </div>
      <div className="Position-Options">
        <div>
          <div style={{ color: "white" }}>Up-Down</div>
          <input
            type="range"
            min="-200"
            max="200"
            step="1"
            value={topPos}
            style={{ appearance: "slider-vertical" }}
            onChange={onTopChange}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <div style={{ color: "white" }}>Left-Right</div>
          <input
            type="range"
            min="-200"
            max="200"
            step="1"
            value={rightPos}
            onChange={onRightChange}
          />
        </div>
      </div>
      <Dropdown
        placeholder="Select Border"
        onDropDownSelect={onDropDownSelect}
        defaultValue="generic-attack-red"
        options={BORDER_ART_LABELS}
      />
    </div>
  );
};

export default ImageOptions;
