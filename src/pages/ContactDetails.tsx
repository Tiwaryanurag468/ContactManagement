import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const ContactDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = useSelector((state: RootState) => 
    state.contacts.contacts.find(contact => contact.id === Number(id))
  );

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => navigate('/')} className="bg-blue-500 text-white p-2 rounded mb-4">
        Back to Contacts
      </button>
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
    </div>
  );
};

export default ContactDetails;
