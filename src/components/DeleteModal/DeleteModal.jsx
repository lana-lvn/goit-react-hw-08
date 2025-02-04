const DeleteModal = ({ contactId, onDelete, onClose }) => {
  return (
    <dialog id="delete_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-red-500">
          Deleted contact cannot be restored!
        </h3>
        <p className="py-4">Still want to delete?</p>
        <button className="btn btn-error" onClick={() => onDelete(contactId)}>
          Delete
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>Close</button>
      </form>
    </dialog>
  );
};

export default DeleteModal;
