import { Form, Formik, Field } from "formik";
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


const initialValues = { name: "", number: "" };

const ContactsSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => { 
        const newContact = { name: values.name, number: values.number };
        dispatch(addContact(newContact));
        actions.resetForm();
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactsSchema}>
            <Form className={s.form}>
    
                <label htmlFor={nameId}>Name
                    <Field id={nameId} type="text" name="name" className={s.input} />
                    <ErrorMessage name="name" component="span" className={s.error} />
                </label>
       
      
                <label htmlFor={numberId}>Number
                    <Field id={numberId} type="text" name="number" className={s.input} />
                    <ErrorMessage name="number" component="span" className={s.error} />
                </label>
                <button className={s.add} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
export default ContactForm;