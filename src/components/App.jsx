import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import s from './ContactForm/ConatctForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contener}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Fetch Data, Please Wait...</p>}
      <ContactList />
    </div>
  );
};

export { App };
