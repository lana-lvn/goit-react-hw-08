import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
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
  );
};
export default ContactList;
