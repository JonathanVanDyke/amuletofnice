import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Generic Attack - Red', label: 'generic-attack-red' },
  { value: 'Generic Attack - Blue', label: 'generic-attack-blue' },
];

const Dropdown = ({ passSelectionToParent = () => {} }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (e) => {
    setSelectedOption(e.label)
    passSelectionToParent(e.label)
  }

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={handleSelect}
        options={options}
      />
    </div>
  );
}

export default Dropdown