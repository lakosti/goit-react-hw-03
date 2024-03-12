import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const INITIAL_FROM_DATA = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSumbit = (data, formActions) => {
    onAddContact(data);
    formActions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FROM_DATA}
      onSubmit={handleSumbit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label>
          <span>Name</span>
          <Field placeholder="Alex Igorov" type="text" name="name" />
          <ErrorMessage className={css.errorMsg} name="name" component="span" />
        </label>
        <label>
          <span>Number</span>
          <Field placeholder="531-57-41" type="number" name="number" />
          <ErrorMessage className={css.errorMsg} name="number" component="span" />
        </label>
        <button type="submit" aria-label="Add new contact">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
