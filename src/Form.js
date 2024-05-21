import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?name=${name}&email=${email}&phone=${phone}&location=${location}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />

        </label>
        
       
        <button type="submit">Submit</button>

    </form>
  );
};

export default Form;






