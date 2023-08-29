import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { INITIAL_VALUES, schema } from './Config';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const inputNameId = nanoid();
  const inputNumberId = nanoid();
  const dispatch = useDispatch();

  const hendleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));

    resetForm();
  };

  return (
    <>
      <h2 className={css.form__heading}>Add contact</h2>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={schema}
        onSubmit={hendleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={inputNameId}>
            <Field
              className={css.input}
              name="name"
              id={inputNameId}
              type="text"
              placeholder=" "
            />
            <span>Name</span>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="p"
            />
          </label>

          <label className={css.label} htmlFor={inputNumberId}>
            <Field
              className={css.input}
              name="number"
              id={inputNumberId}
              type="tel"
              placeholder=" "
            />
            <span>Number</span>
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="p"
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
