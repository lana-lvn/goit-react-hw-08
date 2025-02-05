import { useDispatch } from "react-redux";

import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import { editContact } from "../../redux/contacts/operations";

import s from "./contact.module.css";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const initialValues = { name, number };

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ id, values }));
    actions.resetForm();
    document.getElementById(`edit_modal_${id}`).close();
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.text}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={s.text}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className={s.delete}
          onClick={() => document.getElementById("delete_modal").showModal()}
        >
          Delete
        </button>
        <button
          className={s.delete}
          onClick={() =>
            document.getElementById(`edit_modal_${id}`).showModal()
          }
        >
          Edit
        </button>
      </div>

      {/* DELETE MODAL */}
      <DeleteModal id={id} />

      {/* EDIT MODAL */}
      <EditModal
        id={id}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </>
  );
};
export default Contact;
