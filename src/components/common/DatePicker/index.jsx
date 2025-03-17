import * as React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CustomMUIDatePicker({ hasError, success }) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="თარიღი"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            variant="outlined"
            error={hasError}
            helperText={hasError ? "Invalid date" : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: hasError
                  ? "#e53e3e"
                  : success
                  ? "#38a169"
                  : "#DEE2E6",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
