import React, { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import PlusCircle from "../Icons/PlusCircle";
import CreateEmployeeModal from "../Modals/CreateEmployee";
import ExclamationMark from "../Icons/ExclamationMark";

export default function Selector({
  label,
  options,
  selectedOption,
  onSelect,
  error,
  name,
  id,
  width = "w-[100%]",
  showAddEmployeeOption = false,
  onOpenModal,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (option === "დაამატე თანამშრომელი") {
      onOpenModal();
      handleDefaultOptionSelect();
    } else {
      onSelect(option);
      setIsOpen(false);
    }
  };

  const handleDefaultOptionSelect = () => {
    setIsOpen(false);
  };

  const hasError = !selectedOption && error;

  return (
    <div className="flex flex-col gap-[6px]">
      {label && (
        <label
          htmlFor={id}
          className="font-firaGo font-bold text-[14px] text-gray-subheadline leading-[100%]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          id={id}
          name={name}
          className={`${width} border border-borderGray flex items-center justify-between p-[14px] gap-[10px] bg-white ${
            isOpen ? "rounded-t-[5px]" : "rounded-[5px]"
          }`}
        >
          <span className="font-firaGo text-[14px] text-gray-blackish leading-[100%]">
            {selectedOption || "აირჩიე"}
          </span>
          <ArrowDown />
        </button>

        {/* Dropdown options */}
        {isOpen && (
          <div
            className={`absolute ${width} max-h-[165px] overflow-y-auto border border-borderGray border-t-0 rounded-b-[6px] bg-white z-[10]`}
          >
            {showAddEmployeeOption && (
              <button
                onClick={() => handleSelect("დაამატე თანამშრომელი")}
                className="font-firaGo w-full flex items-center p-[10px] gap-[10px] text-[14px] text-primary hover:bg-gray-10"
              >
                <PlusCircle />
                <span>დაამატე თანამშრომელი</span>
              </button>
            )}

            {/* Other Options */}
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="text-gray-blackish font-firaGo w-full flex p-[10px] gap-[10px] text-[14px] hover:bg-gray-10"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      {hasError && (
        <div className="flex items-center gap-1 text-[10px] font-normal text-red">
          <ExclamationMark color="#F93B1D" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
