import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Contact from "../Contact/Contact";
import EditModal from "../EditModal/EditModal";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { editContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSubmit = (values, actions) => {
    console.log(values);

    dispatch(editContact(values));
    actions.resetForm();
    setSelectedContact(null);
    document.getElementById("edit_modal").close();
  };

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map((contact) => (
          <li className={s.contactItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onEdit={() => {
                setSelectedContact(contact);
                document.getElementById("edit_modal").showModal();
              }}
            />
          </li>
        ))}
      </ul>

      <EditModal
        selectedContact={selectedContact}
        onSubmit={handleSubmit}
        onClose={() => setSelectedContact(null)}
      />
    </>
  );
};

export default ContactList;
