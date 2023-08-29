import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import IconButton from './IconButton';
import Modal from './Modal';
import { ImUserPlus } from 'react-icons/im';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="wrapper">
      <h1 className="main__heading">Phonebook</h1>
      <div className="container">
        {showModal && (
          <Modal onClose={toggleModal}>
            <ContactForm />
          </Modal>
        )}

        <div className="contacts__header">
          <h2 className="secondary__heading">Contacts</h2>
          <IconButton onClick={toggleModal} aria-label="Add contact">
            <ImUserPlus size={20} fill="#000" />
          </IconButton>
        </div>

        <Filter />

        <ContactList />
      </div>
    </div>
  );
};
