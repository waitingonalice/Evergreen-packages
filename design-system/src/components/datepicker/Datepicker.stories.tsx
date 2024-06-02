import React, { useState } from "react";
import { FormNativeDatePicker } from "../form";
import { NativeDatePicker } from ".";

export default {
  title: "Components/NativeDatepicker",
  component: NativeDatePicker,
};

export const Default = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleOnChange = (date: Date | null) => {
    setDate(date);
  };
  return (
    <NativeDatePicker
      value={date}
      onChange={handleOnChange}
      placeholder="Select a date"
      calenderView="month"
    />
  );
};

export const Disabled = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleOnChange = (date: Date | null) => {
    setDate(date);
  };
  return (
    <NativeDatePicker
      value={date}
      onChange={handleOnChange}
      placeholder="Select a date"
      disabled
    />
  );
};

export const Form = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const handleOnChange = (date: Date | null) => {
    setDate(date);
  };
  return (
    <FormNativeDatePicker
      label="Date"
      required
      value={date}
      onChange={handleOnChange}
      placeholder="Select a date"
      showError
      errorMessage="Error"
    />
  );
};
