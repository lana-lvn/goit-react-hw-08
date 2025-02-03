import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';


function App() {

    const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchContacts()); }, [dispatch]);
  
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  
  return (
    
    <div className="wrapper">
      <div className='container'>
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

export default App;
