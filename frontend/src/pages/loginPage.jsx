import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api';
import FormInput from '../components/formInput';
import Navbar from '../components/navbar';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(credentials);
    if (response.error) {
      setError(response.error);
    } else {
      // Handle successful login (e.g., save token, redirect)
      navigate('/'); // Redirect to the home page or another route
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
