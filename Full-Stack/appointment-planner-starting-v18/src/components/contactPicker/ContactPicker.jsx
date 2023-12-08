import React from "react";

export const ContactPicker = ({
  contacts,
  handleChange,
  value
}) => {
  return (
    <select onChange={handleChange} value={value}>
      <option value="" disabled>Select a Contact</option>
      {contacts.map(i => {
        return <option value={i.name}>{i.name}</option>
      })}
    </select>
  );
};
