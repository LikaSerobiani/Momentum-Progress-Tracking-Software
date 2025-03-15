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
}) {
  const hasError = error;
  const isValid = !hasError && value.length > 0;

  return (
    <div className="flex flex-col gap-[5px]">
      <label className="font-firaGo font-bold text-[14px] text-gray-subheadline">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-[550px] h-[135px] p-[10px] gap-[10px] rounded-[6px] border ${
          hasError
            ? "border-red"
            : isValid
            ? "border-green"
            : "border-borderGray"
        }`}
        style={{ resize: "none", outline: "none" }}
      ></textarea>

      <div className="text-[14px] font-firaGo">
        <div className="text-[14px] font-firaGo">
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
Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
