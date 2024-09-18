import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactForm = ({ onSubmit }) => {
  // Налаштовуємо Валідацію
  const registerShema = Yup.object({
    name: Yup.string()
      .required("Це поле є обов'язковим")
      .min(3, 'Тре більше літер')
      .max(50, 'Полегше, поле не гумове!'),
    number: Yup.string()
      .required("Це поле є обов'язковим")
      .min(3, 'Тре більше чисел')
      .max(16, 'Шось це вже не схоже на номер телефону!'),
  });

  // Значенна полів форми по замовчуванню
  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  // Обробляємо форму при Submit

  const handleSubmit = (date, actions) => {
    date.id = nanoid();
    onSubmit(date);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerShema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" className={s.input} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          <span>Number</span>
          <Field name="number" className={s.input} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
