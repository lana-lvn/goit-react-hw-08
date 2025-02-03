import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import s from './contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

    return (<>
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
      <button className={s.delete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>);
};
export default Contact;
