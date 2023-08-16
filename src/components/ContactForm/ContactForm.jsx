import React, { useState } from 'react';
import s from './ConatctForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/actions';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nanoidID = nanoid();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContacts({ name: name, number: number }));
    setName('');
    setNumber('');
  };

  const changeName = e => {
    setName(e.target.value);
  };

  const changeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className={s.flex}>
        <form className={s.forms} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor={nanoidID}>
            NAME
          </label>
          <input
            className={s.input}
            id={nanoidID}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeName}
          />

          <label className={s.label} htmlFor={nanoidID}>
            NUMBER
          </label>
          <input
            className={s.input}
            id={nanoidID}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={changeNumber}
          />

          <button className={s.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    </>
  );
};

export { ContactForm };
