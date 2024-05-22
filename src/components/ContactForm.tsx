import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice';
import { Contact } from '../types/types';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Contact</button>
    </form>
  );
};

export default ContactForm;
