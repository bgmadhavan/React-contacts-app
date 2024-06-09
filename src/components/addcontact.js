import { useState } from "react";
import React from 'react'

export default function AddContact({onSave}) {

        const [formData, setFormData] = useState({
          name: '',
          phone: '',
          email: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData(prevState => ({
            ...prevState,
            [name]: value
          }));
        };
      
        const handleSubmit = (e) => {
          if(formData.name === '' || formData.phone === '' || formData.email === '')
            {
                alert('Enter valid data to save');
            }
          else
          {
            e.preventDefault();
            onSave(formData);
          }
          e.preventDefault();
          setFormData({
            name: '',
            phone: '',
            email: ''
          });
        };
    
  return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Contact</button>
    </form>
  )
}
