import { deleteContact, selectContacts } from 'components/redux/contactsSlice';
import { selectFilter } from 'components/redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispathc = useDispatch();
  const contacts = useSelector(selectContacts);
  const contactsFilter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  const renderedContacts = contactsFilter === '' ? contacts : filteredContacts;

  const handleDelete = id => dispathc(deleteContact(id));

  return (
    <ul className={`${css.cardsList} list`}>
      {renderedContacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li className={css.card} key={id}>
            <p>{`${name}: ${number}`}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
