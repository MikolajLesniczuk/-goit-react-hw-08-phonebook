import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/actions';

import { useEffect } from 'react';
import s from './contacts.module.css';
export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <h1 className={s.title}>Phonebook</h1> */}
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Fetch Data, Please Wait...</p>}
      <ContactList />
    </div>
  );
};
