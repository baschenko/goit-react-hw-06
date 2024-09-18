import s from './SearchBox.module.css';

const SearchBox = ({ changeFilter, filter }) => {
  // Оброблюємо значення пошукового поля і передеємо в Арр
  const handleChange = e => {
    changeFilter(e.target.value);
  };

  return (
    <div>
      <p>Find contacts by name or phone</p>
      <input
        type="text"
        onChange={handleChange}
        value={filter}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
