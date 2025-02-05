import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contacts/selectors";

import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map((contact) => (
          <li className={s.contactItem} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
