import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <div>
      <div className="container">
        <h1 className="title ">Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>

      <ContactList />
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
};
export default ContactsPage;
