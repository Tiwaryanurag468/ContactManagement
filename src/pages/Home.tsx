import React from 'react';
import AddContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Home</h1>
      <AddContactForm />
      <ContactList />
    </div>
  );
};

export default Home;
