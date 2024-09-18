import { useEffect, useState } from 'react';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

const App = () => {
  // Створюємо State і загружаємо з LocalStorage об'єкт, якщо є
  const [contacts, setContacts] = useState(() => {
    const saveContacts = JSON.parse(window.localStorage.getItem('contacts'));

    if (saveContacts?.length) {
      return saveContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  // Додаємо у LocalStorage
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Створюємо стейт для фільтру
  const [filter, setFilter] = useState('');
  const changeFilter = value => {
    setFilter(value);
  };

  // Шукаємо пошуковий запрос або ім'ї або по номеру телефону
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  // Додаємо Новий контакт у стейт
  const addContact = value => {
    setContacts(prev => [...prev, value]);
  };

  // Видаляємо контакт зі стетйту по Id
  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contactId !== contact.id);
    });
  };

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox changeFilter={changeFilter} filter={filter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
