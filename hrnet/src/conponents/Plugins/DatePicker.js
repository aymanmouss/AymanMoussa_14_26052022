import React from "react";

const DatePicker = ({ name, label, value, setValue }) => {
  return (
    <>
      <label htmlFor='start-date'>{label}</label>
      <input
        value={value}
        type='date'
        name={name}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default DatePicker;
