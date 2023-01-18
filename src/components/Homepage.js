import React, { useState, useEffect } from "react";
import Screenshot from "./Screenshot";
import ImageOptions from "./ImageOptions";
import TextOptions from "./TextOptions";

const Homepage = () => {
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
    const isDeleting = e.target.value.length < body.length;
    if (e.target.value.slice(-5) === "$adde" && isDeleting) {
      setBody(body.slice(0, -89));
      setMaskedBody(e.target.value.slice(0, -5));
    } else {
      setBody(e.target.value);
      if (isDeleting) {
        setMaskedBody(maskedBody.slice(0, -1));
      } else {
        setMaskedBody(maskedBody + e.target.value.slice(-1));
      }
    }
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

  // Add symbol
  const onAddSymbol = (e) => {
    setBody(body + e.target.value);
    setMaskedBody(maskedBody + "$added");
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
        onAddSymbol={onAddSymbol}
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
