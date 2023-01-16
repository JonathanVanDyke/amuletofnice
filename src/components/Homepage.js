import React, { useState, useEffect } from 'react';
import Screenshot from './Screenshot';
import ImageOptions from './ImageOptions';
import TextOptions from './TextOptions';

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

  // Title Text
  const [title, setTitle] = useState("")

  const onTitleUpdate = (e) => {
    setTitle(e.target.value)
  }

  // Body Text
  const [body, setBody] = useState("")

  const onBodyUpdate = (e) => {
    setBody(e.target.value)
  }

  // Type Text
  const [type, setType] = useState("")

  const onTypeUpdate = (e) => {
    setType(e.target.value)
  }

  return (
    <div className='Homepage'>
      <TextOptions 
        onTitleUpdate={onTitleUpdate}
        onBodyUpdate={onBodyUpdate}
        onTypeUpdate={onTypeUpdate}
      />
      <Screenshot 
        borderName={borderName} 
        rightPos={rightPos} 
        topPos={topPos} 
        scale={scale}
        title={title}
        body={body}
        type={type}
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