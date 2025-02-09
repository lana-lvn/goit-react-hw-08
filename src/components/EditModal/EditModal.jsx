import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./editModal.module.css";

const EditSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Only numbers and `-` are allowed")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const EditModal = ({ id, initialValues, onSubmit }) => {
  return (
    <dialog id={`edit_modal_${id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">ENTER NEW INFORMATION</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={EditSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-5 p-[5px]">
            <label htmlFor="name">
              Name
              <Field id="name" name="name" className={s.input} />
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label htmlFor="number">
              Number
              <Field id="number" name="number" className={s.input} />
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <button className={s.delete} type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default EditModal;
