import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        required
      ></input>
      <input
        type='date'
        placeholder='123-456-7890'
        value={date}
        onChange={e => {
          setDate(e.target.value);
        }}
        required
        min={getTodayString()}
      ></input>
      <input
        type='time'
        placeholder='yourname@example.com'
        value={time}
        onChange={e => {
          setTime(e.target.value);
        }}
        required
      ></input>
      <ContactPicker
        contacts={contacts}
        handleChange={e => {
          setContact(e.target.value);
        }}
        value={contact}
      />
      <input
        type='submit'
        value='Add Appointment'
      ></input>
    </form>
  );
};
