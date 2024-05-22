import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { deleteContact } from '../store/contactsSlice';
import { Contact } from '../types/types';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.map((contact: Contact) => (
        <div key={contact.id} className="border p-4 mb-4">
          <h2 className="text-xl">{contact.name}</h2>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <button onClick={() => dispatch(deleteContact(contact.id))} className="bg-red-500 text-white p-2 mt-2">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
