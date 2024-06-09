import React from 'react' ;

export default function ContactList({ contacts, onSelect, deleteContact }) {

  const handleDelete = (e)=>{
    const {value} = e.target;
    deleteContact(value);
    e.preventDefault();
  }

  return (
    <div className='listCon'>
      {
        contacts.length ? (contacts.map(contact => (
          <div className='bundle'>
          <div className='insideDiv'  key={contact.id} onClick={() => onSelect(contact)}>
            {contact.name}
          </div>
          <button value={contact.id} onClick={handleDelete}>x</button>
          </div>

        ))) : 
        (<p>Add a new contact</p>)
      }

    </div>
  )
}



