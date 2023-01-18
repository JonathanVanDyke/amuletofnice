import React, { useState, useEffect } from "react";
import Screenshot from "./Screenshot";
import ImageOptions from "./ImageOptions";
import TextOptions from "./TextOptions";

const Homepage = () => {
  const [cursorPos, setCursorPos] = useState(0);

  // DropDown
  const [borderName, setBorderName] = useState("generic-attack-red");

  const onDropDownSelect = (name) => {
    setBorderName(name);
  };

  // Pos
  const [rightPos, setRightPos] = useState(0);
  const [topPos, setTopPos] = useState(0);

  const onTopChange = (e) => {
    setTopPos(e.target.value);
  };

  const onRightChange = (e) => {
    setRightPos(e.target.value);
  };

  // Scale
  const [scale, setScale] = useState(1.35);

  useEffect(() => {
    setScale(scale);
  }, [scale]);

  const onSliderChange = (e) => {
    setScale(e.target.value);
  };

  // Title Text
  const [title, setTitle] = useState("");

  const onTitleUpdate = (e) => {
    setTitle(e.target.value);
  };

  // Body Text
  const [body, setBody] = useState("");
  const [maskedBody, setMaskedBody] = useState("");

  const onBodyUpdate = (e) => {
    const value = e.target.value;
    setCursorPos(e.target.selectionStart);
    setMaskedBody(value);
    const val = convertSymbols(value);
    setBody(val);
  };

  // Type Text
  const [type, setType] = useState("");

  const onTypeUpdate = (e) => {
    setType(e.target.value);
  };

  // Cost Update
  const [cost, setCost] = useState(" ");

  const onCostUpdate = (e) => {
    setCost(e.target.value);
  };

  // Attack Update
  const [attack, setAttack] = useState(" ");

  const onAttackUpdate = (e) => {
    setAttack(e.target.value);
  };

  // Defense Update
  const [defense, setDefense] = useState(" ");

  const onDefenseUpdate = (e) => {
    setDefense(e.target.value);
  };

  // Create return
  const onKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      setMaskedBody(
        maskedBody.slice(0, cursorPos) + "<br/>" + maskedBody.slice(cursorPos)
      );
    }
  };

  // Cursor Pos
  const onMouseUp = (e) => {
    setCursorPos(e.target.selectionStart);
  };

  // Tip
  const onFocus = (e) => {
    if (maskedBody === "Tip: Press Shift+Enter to make a new line...") {
      setMaskedBody("");
    }
  };

  const onBlur = (e) => {
    if (!maskedBody) {
      setMaskedBody("Tip: Press Shift+Enter to make a new line...");
    }
  };

  const convertSymbols = (chars) => {
    let arr = chars.split("$");
    arr = arr.map((ele) => {
      if (ele === "res") {
        return `<img style='width:16px' src=${"https://jonathanvandyke.github.io/hostImages/Symbol001.png"} />`;
      } else if (ele === "atk") {
        return `<img style='width:16px' src=${"https://jonathanvandyke.github.io/hostImages/Symbol002.png"} />`;
      } else if (ele === "hp") {
        return `<img style='width:16px' src=${"https://jonathanvandyke.github.io/hostImages/Symbol003.png"} />`;
      }
      return ele;
    });
    return arr.join("");
  };

  return (
    <div className="Homepage">
      <TextOptions
        onTitleUpdate={onTitleUpdate}
        onBodyUpdate={onBodyUpdate}
        maskedBody={maskedBody}
        onTypeUpdate={onTypeUpdate}
        onCostUpdate={onCostUpdate}
        onAttackUpdate={onAttackUpdate}
        onDefenseUpdate={onDefenseUpdate}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onMouseUp={onMouseUp}
        onFocus={onFocus}
      />
      <div className="Card-Wrapper">
        <Screenshot
          borderName={borderName}
          rightPos={rightPos}
          topPos={topPos}
          scale={scale}
          title={title}
          body={body}
          type={type}
          cost={cost}
          attack={attack}
          defense={defense}
        />
      </div>
      <ImageOptions
        scale={scale}
        topPos={topPos}
        rightPos={rightPos}
        onSliderChange={onSliderChange}
        onTopChange={onTopChange}
        onRightChange={onRightChange}
        onDropDownSelect={onDropDownSelect}
      />
    </div>
  );
};

export default Homepage;
