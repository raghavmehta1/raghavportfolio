// ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log('Name:', name, 'Email:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs and submit button */}
    </form>
  );
};

export default ContactForm;