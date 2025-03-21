import React from "react";
import ExclamationMarkIcon from "../icons/ExclamationMark";
import CheckIcon from "../icons/Check";
import PropTypes from "prop-types";

export default function Input({
  label,
  type,
  id,
  value,
  onChange,
  error,
  onBlur,
  minLengthValidationText,
  touched,
  maxLengthValidationText,
  width,
}) {
  const hasError = error;
  const isValid = !hasError && value?.length > 0;

  return (
    <div className={`${width} flex flex-col gap-[5px]`}>
      <label
        htmlFor={id || "inputField"}
        className="font-firaGo font-bold text-[14px] leading-[16.8px] text-gray-subheadline"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[42px] rounded-[6px] border p-[10px] focus:outline-none ${
          hasError
            ? "border-red"
            : isValid
            ? "border-green"
            : "border-borderGray"
        }`}
      />
      <div className="text-[10px] font-firaGo">
        <div className="text-[10px] font-firaGo">
          {!isValid && !hasError && !touched && (
            <>
              <div className="flex items-center gap-1">
                <CheckIcon color="#6C757D" />
                <span className="text-gray-validation">
                  {minLengthValidationText}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CheckIcon color="#6C757D" />
                <span className="text-gray-validation">
                  {maxLengthValidationText}
                </span>
              </div>
            </>
          )}
        </div>

        {isValid && !hasError && (
          <>
            <div className="flex items-center gap-1">
              <CheckIcon color="#45A849" />
              <span className="text-green">{minLengthValidationText}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckIcon color="#45A849" />
              <span className="text-green">{maxLengthValidationText}</span>
            </div>
          </>
        )}

        {hasError && (
          <div className="flex items-center gap-1">
            <ExclamationMarkIcon color="#F93B1D" />
            <span className="text-red">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touched: PropTypes.bool,
  firstValidation: PropTypes.string.isRequired,
  secondValidation: PropTypes.string.isRequired,
  width: PropTypes.string,
};
