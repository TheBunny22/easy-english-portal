import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import React from "react";

const DateCalender = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateCalendar />{" "}
    </LocalizationProvider>
  );
};

export default DateCalender;
