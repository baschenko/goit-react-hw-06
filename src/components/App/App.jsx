import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {!contacts.length ? (
        <p>Додайте перший контакт</p>
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default App;
