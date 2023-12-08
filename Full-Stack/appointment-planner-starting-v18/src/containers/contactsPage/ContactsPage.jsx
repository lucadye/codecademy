import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
  }

  const [duplicate, setDuplicate] = useState(false)
  useEffect(() => {
    setDuplicate(contacts.some(c => {
      return c.name === name;
    }));
  }, [name,contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duplicate) { return; }
    addContact(name, phone, email);
    resetForm();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts.map(i => {
          return {
            name: i.name,
            description: [i.phone, i.email],
          };
        })}/>
      </section>
    </div>
  );
};
