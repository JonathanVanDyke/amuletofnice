import React, { useState } from 'react';
import Screenshot from './Screenshot';
import Dropdown from './Dropdown';
import { BORDER_ART_LABELS } from '../constants/borderArts';

const Homepage = () => {
  const [borderName, setBorderName] = useState('generic-attack-red')

  const onDropDownSelect = (name) => {
    setBorderName(name)
  }

  return (
    <div className='Homepage'>
      <Screenshot borderName={borderName} />
      <Dropdown 
        onDropDownSelect={onDropDownSelect} 
        defaultValue='generic-attack-red'
        options={BORDER_ART_LABELS}
      />
    </div>
  )
}

export default Homepage