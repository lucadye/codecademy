import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='John Doe'
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        required
      ></input>
      <input
        type='text'
        placeholder='123-456-7890'
        value={phone}
        onChange={e => {
          setPhone(e.target.value);
        }}
        required
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      ></input>
      <input
        type='text'
        placeholder='yourname@example.com'
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
        required
        pattern="[a-zA-Z0-9\-]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9\-]+"
      ></input>
      <input
        type='submit'
        value='Add Contact'
      ></input>
    </form>
  );
};

