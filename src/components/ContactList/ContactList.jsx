import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
      {contacts.length === 0 && <p>Порожньо! Перекотиполе...</p>}
    </div>
  );
};

export default ContactList;
