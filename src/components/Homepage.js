import React, { useState } from 'react';
import Screenshot from './Screenshot';
import Dropdown from './Dropdown';

const Homepage = () => {
  const [borderName, setBorderName] = useState('generic-attack-red')

  const onDropDownSelect = (name) => {
    setBorderName(name)
  }

  return (
    <div className='Homepage'>
      <Screenshot borderName={borderName} />
      <Dropdown onDropDownSelect={onDropDownSelect} />
    </div>
  )
}

export default Homepage