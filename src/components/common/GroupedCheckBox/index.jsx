import { useState, useEffect } from "react";
import Checkbox from "../CheckBox";

const GroupedCheckbox = ({ options, onChange, selected = [] }) => {
  const [selectedOptions, setSelectedOptions] = useState(selected);

  useEffect(() => {
    setSelectedOptions(selected);
  }, [selected]);

  const handleCheckboxChange = (optionId) => {
    const updatedSelectedOptions = selectedOptions.includes(optionId)
      ? selectedOptions.filter((id) => id !== optionId)
      : [...selectedOptions, optionId];

    setSelectedOptions(updatedSelectedOptions);
    onChange(updatedSelectedOptions);
  };

  return (
    <>
      {options.map((option) => (
        <Checkbox
          key={option.id}
          id={option.id}
          avatar={option?.avatar}
          label={option.name}
          checked={selectedOptions.includes(option.id)}
          onChange={() => handleCheckboxChange(option.id)}
        />
      ))}
    </>
  );
};

export default GroupedCheckbox;
