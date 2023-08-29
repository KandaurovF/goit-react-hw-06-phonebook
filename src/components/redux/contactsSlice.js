import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        const name = action.payload.name;
        const existingContact = state.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (existingContact) {
          Notify.warning('This contact already exists!');
        } else {
          state.push(action.payload);
          // state.contacts = [...state.contacts, action.payload];

          // toggleModal(false);
        }
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },

    deleteContact(state, action) {
      // const deletedContactIndex = state.findIndex(
      //   contact => contact.id === action.payload
      // );
      // state.splice(deletedContactIndex, 1);
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts;
