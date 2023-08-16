// import { addContacts, deleteContact, filterContact } from './actions';
// import Notiflix from 'notiflix';
// const { createReducer } = require('@reduxjs/toolkit');

// const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const contactsReducer = createReducer(
//   JSON.parse(localStorage.getItem('contacts')) || initialContacts,
//   {
//     [addContacts]: (state, action) => {
//       const existingContact = state.some(
//         contact =>
//           contact.number === action.payload.number ||
//           contact.name === action.payload.name
//       );

//       if (existingContact) {
//         Notiflix.Notify.info(`${action.payload.name} is already in contacts`);
//         return state;
//       }

//       const newState = [...state, action.payload];
//       localStorage.setItem('contacts', JSON.stringify(newState));

//       return newState;
//     },

//     [deleteContact]: (state, action) => {
//       const updatedContacts = state.filter(
//         contact => contact.id !== action.payload
//       );

//       localStorage.setItem('contacts', JSON.stringify(updatedContacts));
//       if (updatedContacts.length === 0) {
//         localStorage.removeItem('contacts');
//       }
//       return updatedContacts;
//     },
//   }
// );

// export const filtersReducer = createReducer('', {
//   [filterContact]: (state, action) => action.payload,
// });
// //
