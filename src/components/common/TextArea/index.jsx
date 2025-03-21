import PropTypes from "prop-types";
import ExclamationMarkIcon from "../icons/ExclamationMark";
import CheckIcon from "../icons/Check";
import Button from "../Button";

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
  showCommentButton = false,
  onSubmit,
  borderRadius = "6px",
}) {
  const hasError = !disableValidation && error;
  const isValid = !disableValidation && !hasError && value.length > 0;

  return (
    <div className="flex flex-col gap-[5px] relative">
      <label className="font-firaGo font-bold text-[14px] text-gray-subheadline">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          className={`h-[135px] p-[10px] gap-[10px] border pr-[50px] ${
            disableValidation
              ? "border-borderGray"
              : hasError
              ? "border-red"
              : isValid
              ? "border-green"
              : "border-borderGray"
          }`}
          style={{
            width,
            resize: "none",
            outline: "none",
            borderRadius,
          }}
        ></textarea>

        {showCommentButton && (
          <Button
            title="დააკომენტარე"
            type="button"
            onClick={onSubmit}
            disabled={!value.trim()}
            className="absolute bottom-[20px] right-[20px]"
            variant="roundedFull"
          />
        )}
      </div>

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
  showSubmitButton: PropTypes.bool,
  onSubmit: PropTypes.func,
};
