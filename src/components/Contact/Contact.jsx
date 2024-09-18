import { IoPersonSharp } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import s from './Contact.module.css';

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <>
      <div className={s.textBlock}>
        <p className={s.text}>
          <IoPersonSharp className={s.icon} size="22" />
          {name}
        </p>
        <p className={s.text}>
          <MdPhone className={s.icon} size="22" />
          {number}
        </p>
      </div>
      <button type="button" className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};

export default Contact;
