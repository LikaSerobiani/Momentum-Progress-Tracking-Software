import React, { useState } from "react";
import PlusCircle from "../Icons/PlusCircle";
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
    <div className="flex flex-col gap-[5px]">
      {label && (
        <label
          htmlFor={id}
          className="font-firaGo font-bold text-[14px] text-gray-subheadline"
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
          {selectedOption ? (
            <div className="flex items-center gap-[10px]">
              {selectedOption.icon ? (
                <img src={selectedOption.icon} alt={selectedOption.name} />
              ) : selectedOption.avatar ? (
                <img
                  src={selectedOption.avatar}
                  className="w-[28px] h-[28px] rounded-full"
                  alt={selectedOption.name}
                />
              ) : null}
              <span className="font-firaGo text-[14px] text-gray-blackish leading-[100%]">
                {selectedOption.name} {selectedOption.surname || ""}
              </span>
            </div>
          ) : (
            <span className="font-firaGo text-[14px] text-gray-blackish leading-[100%]">
              აირჩიე
            </span>
          )}
          <svg
            className={`w-4 h-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown options */}
        {isOpen && (
          <div
            className={`absolute ${width} max-h-[165px] overflow-y-auto border border-borderGray border-t-0 rounded-b-[6px] bg-white z-[10]`}
          >
            {showAddEmployeeOption && (
              <button
                onClick={() => handleSelect("დაამატე თანამშრომელი")}
                className="font-firaGo w-full flex items-center p-[14px] gap-[10px] text-[14px] text-primary hover:bg-gray-10"
              >
                <PlusCircle />
                <span>დაამატე თანამშრომელი</span>
              </button>
            )}

            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="text-gray-blackish font-firaGo w-full flex p-[14px] gap-[10px] text-[14px] hover:bg-gray-10 items-center min-h-[40px]"
              >
                {option.icon ? (
                  <img
                    src={option.icon}
                    className="w-[20px] h-[20px] object-contain"
                    alt={option.name}
                  />
                ) : option.avatar ? (
                  <img
                    src={option.avatar}
                    className="w-[28px] h-[28px] rounded-full object-cover"
                    alt={option.name}
                  />
                ) : null}
                <span className="font-firaGo text-[14px] text-gray-blackish leading-[100%]">
                  {option.name}
                </span>
                {option.surname && (
                  <span className="font-firaGo text-[14px] text-gray-blackish leading-[100%]">
                    {option.surname}
                  </span>
                )}
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
