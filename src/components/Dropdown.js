import React from "react";
import Select from "react-select";

const Dropdown = ({
  placeholder = "Select...",
  options = [],
  defaultValue = null,
  onDropDownSelect = () => {},
}) => {
  const handleSelect = (e) => {
    onDropDownSelect(e.label);
  };

  return (
    <div>
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="DropDown"
        onChange={handleSelect}
        options={options}
      />
    </div>
  );
};

export default Dropdown;
