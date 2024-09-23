import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import clsx from "clsx";
import css from "./ContactForm.module.css"

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.number().min(7, "Too Short!").required("Required"),
});

const initialValues = {
  name: "",
  number: "",
  id: "",
};


const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
      values.id = nanoid()
      onAdd(values)
      actions.resetForm();
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema} > 
      <Form className={clsx(css.form)}>
        <div className={clsx(css.fieldWrapper)}>
          <label className={clsx(css.formLabel)} htmlFor="userName">Name</label>
          <Field className={clsx(css.formInput)} type="text" name="name" id="userName"></Field>
        </div>
        <div className={clsx(css.fieldWrapper)}>
          <label className={clsx(css.formLabel)} htmlFor="userNumber">Number</label>
          <Field className={clsx(css.formInput)} type="text" name="number" id="userNumber"></Field>
        </div>
        <button className={clsx(css.formBtn)} type="submit">Add Contact</button>
      </Form>
      
    </Formik>
  )
}

export default ContactForm