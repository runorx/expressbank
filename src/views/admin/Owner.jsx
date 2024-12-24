import React, { useState } from 'react';
import axios from 'axios';

const CreateOwnerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'owner'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^(?=[a-zA-Z0-9._ ]{10,35}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})/;

    if (!nameRegex.test(formData.name)) {
      setError('Please enter a valid name (10-35 characters, no special characters at start/end)');
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      setError('Password must be at least 12 characters long and include lowercase, uppercase, number, and special character');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:5000/api/admins/owner/create', formData);
      setSuccess('Owner created successfully!');
      setFormData({ name: '', email: '', password: '', role: 'owner' });
    } catch (error) {
      setError(error.response?.data || 'An error occurred while creating the owner');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Create New Owner</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Create Owner
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {success && <p className="text-green-500 mt-3">{success}</p>}
    </div>
  );
};

export default CreateOwnerForm;

