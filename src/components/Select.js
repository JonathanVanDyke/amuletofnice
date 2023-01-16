import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'Generic Attack - Red', label: 'generic-attack-red' },
  { value: 'Generic Attack - Blue', label: 'generic-attack-blue' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}