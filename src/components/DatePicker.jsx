import React, { useState } from 'react';
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

const DatePicker = ({ value, onChange, label, error, helperText,...props }) => {
  const [date, setDate] = useState(value);

  const handleChange = (newValue) => {
    setDate(newValue);
    onChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDatePicker
        label={label}
        value={date}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error}
            helperText={helperText}
            {...props}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;