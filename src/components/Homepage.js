import React, { useState, useEffect } from 'react';
import Screenshot from './Screenshot';
import ImageOptions from './ImageOptions';

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
  )
}

export default Homepage