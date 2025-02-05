import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import s from "./deleteModal.module.css";

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default DeleteModal;
