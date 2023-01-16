import React, { useState } from 'react';
import Select from 'react-select';

const Dropdown = ({ options = [], defaultValue = null, onDropDownSelect = () => {} }) => {
  const handleSelect = (e) => {
    onDropDownSelect(e.label)
  }
  
  return (
    <div>
      <Select
        defaultValue={defaultValue}
        isSearchable={false}
        className='DropDown'
        onChange={handleSelect}
        options={options}
      />
    </div>
  );
}

export default Dropdown