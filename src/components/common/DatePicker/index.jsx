import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

const CustomDatePicker = ({ value, onChange }) => {
  const defaultDate = addDays(new Date(), 1);

  useEffect(() => {
    if (!value) {
      onChange(defaultDate);
    }
  }, [value, onChange, defaultDate]);

  const handleChange = (date) => {
    onChange(date);
  };

  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-firaGo font-bold text-[14px] text-gray-subheadline leading-[100%]">
        დედლაინი
      </label>

      <div className="relative">
        <DatePicker
          selected={value || defaultDate}
          onChange={handleChange}
          minDate={defaultDate}
          dateFormat="dd/MM/yyyy"
          className="w-[314px] p-[14px] border h-[45px] border-borderGray text-gray-greyish text-[14px] text-firaGo leading-[20px] rounded-[5px] focus:outline-none"
          popperPlacement="bottom-start"
          popperClassName="z-50 custom-datepicker"
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
