import React, { useState, useEffect } from 'react';
import {v4 as uuidV4} from 'uuid';
import ContactList from './components/contactList';
import Details from './components/details';
import Search from './components/search';
import AddContact from './components/addcontact';
import './App.css'; 

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [flipped, setFlipped] = useState(false);
  const LOCAL_STORAGE_KEY = 'phonebook.contacts';

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() =>{
    const stored_contacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(stored_contacts)
      {
        setContacts(stored_contacts);
      }
  },[])

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    if(selectedContact && !contacts.some(contact=>contact.id === selectedContact.id)){
      setSelectedContact(null);
    }
  },[contacts])


  const handleSaveContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: uuidV4() }]);
    setFlipped(!flipped);
  };

  const handleDeleteContact = (delContactId)=>{
    const newcontacts = [...contacts];
    const index = newcontacts.findIndex(contact => contact.id === delContactId);
    newcontacts.splice(index,1);
    setContacts(newcontacts);
  }

  const flipIt = () =>{
    setFlipped(!flipped);
  }


  return (
        <div className={`flipcard ${flipped ? 'flipped' : '' }`}>
        <div className='App'>
        <h3>PHONEBOOK</h3>
        <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
        <ContactList contacts={filteredContacts} onSelect={setSelectedContact} deleteContact={handleDeleteContact} />
        <Details contact={selectedContact} />
        <button className='addbtn' onClick={flipIt} >addToContacts</button>
        </div>
        <div className='App back'>
            <button className='backbtn' onClick={flipIt}>back</button>
            <h3>PHONEBOOK</h3>
            <AddContact onSave={handleSaveContact}/>
        </div>
      </div>
  );
};

export default App;
