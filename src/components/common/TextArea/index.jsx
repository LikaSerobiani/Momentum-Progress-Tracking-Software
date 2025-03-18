import PropTypes from "prop-types";
import ExclamationMarkIcon from "../Icons/ExclamationMark";
import CheckIcon from "../Icons/Check";

export default function Textarea({
  label,
  id,
  value,
  onChange,
  error,
  onBlur,
  minLengthValidationText,
  touched,
  maxLengthValidationText,
  disableValidation = false,
  width = "100%",
  placeholder,
}) {
  const hasError = !disableValidation && error;
  const isValid = !disableValidation && !hasError && value.length > 0;

  return (
    <div className="flex flex-col gap-[5px]">
      <label className="font-firaGo font-bold text-[14px] text-gray-subheadline">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`${width} h-[135px] p-[10px] gap-[10px] rounded-[6px] border ${
          disableValidation
            ? "border-borderGray"
            : hasError
            ? "border-red"
            : isValid
            ? "border-green"
            : "border-borderGray"
        }`}
        style={{ resize: "none", outline: "none" }}
      ></textarea>

      {!disableValidation && (
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
      )}
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  minLengthValidationText: PropTypes.string,
  maxLengthValidationText: PropTypes.string,
  touched: PropTypes.bool,
  disableValidation: PropTypes.bool,
};
