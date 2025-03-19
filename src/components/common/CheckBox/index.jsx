import { useState } from "react";
import PropTypes from "prop-types";
import Check from "../Icons/Check";

const Checkbox = ({ id, label, checked = false, onChange, avatar = "" }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div
        className="relative w-[22px] h-[22px] border-[1.5px] border-gray-headline rounded-md cursor-pointer"
        onClick={handleCheckboxChange}
      >
        {isChecked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check color="#212529" />
          </div>
        )}
      </div>
      {avatar && (
        <img
          src={avatar}
          alt={label}
          className="w-7 h-7 rounded-full mr-1 object-cover"
        />
      )}

      {label && (
        <label
          htmlFor={id}
          className="text-gray-headline text-[16px] font-normal font-firaGo"
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
