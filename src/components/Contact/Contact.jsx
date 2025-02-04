import { useDispatch } from "react-redux";
import { FaUser, FaPhone } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";

import s from "./contact.module.css";

const Contact = ({ id, name, number, onEdit }) => {
  const dispatch = useDispatch();

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
        <button className={s.delete} onClick={onEdit}>
          {" "}
          Edit
        </button>
      </div>

      {/* DELETE MODAL */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="px-[7px] py-[3px] hover:cursor-pointer border-[#004aad] rounded-[50%] absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-red-500">
            Deleted contact cannot be restored!
          </h3>
          <p className="py-4">Still want to delete?</p>
          <button
            className={s.delete}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Contact;
