import React, { useState, useEffect } from 'react';
import Screenshot from './Screenshot';
import Dropdown from './Dropdown';
import { BORDER_ART_LABELS } from '../constants/borderArts';

const Homepage = () => {
  // DropDown
  const [borderName, setBorderName] = useState('generic-attack-red')

  const onDropDownSelect = (name) => {
    setBorderName(name)
  }

  // Pos
  const [rightPos, setRightPos] = useState(0);
  const [topPos, setTopPos] = useState(0);

  const onTopChange = (e) => {
    setTopPos(e.target.value)
  }

  const onRightChange = (e) => {
    setRightPos(e.target.value)
  }

  // Scale
  const [scale, setScale] = useState(1)

  useEffect(() => {
    setScale(scale);
  }, [scale])

  const onSliderChange = (e) => {
    setScale(e.target.value);
  }

  return (
    <div className='Homepage'>
      <Screenshot 
        borderName={borderName} 
        rightPos={rightPos} 
        topPos={topPos} 
        scale={scale}
      />
      <div className='Image-Options'>
      <br></br>
      <div>
        <div style={{ color: "white" }}>Scale</div>
        <input type="range" min="0" max="3" step=".01" value={scale}
          onChange={onSliderChange} />
      </div>
        <div className='Position-Options'>
        <div>
          <div style={{ color: "white" }}>Up-Down</div>
          <input type="range" min="-200" max="200" step="1" value={topPos}
            style={{ appearance: "slider-vertical" }}
            onChange={onTopChange} />
        </div>
          <div style={{ marginTop: "50px" }}
>
          <div style={{ color: "white" }}>Left-Right</div>
          <input type="range" min="-200" max="200" step="1" value={rightPos}
            onChange={onRightChange} />
        </div>
      </div>
      <Dropdown 
        placeholder="Select Border"
        onDropDownSelect={onDropDownSelect} 
        defaultValue='generic-attack-red'
        options={BORDER_ART_LABELS}
      />
      </div>
    </div>
  )
}

export default Homepage