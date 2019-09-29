import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from '../services/tokenService';

const Login = ({setUser, hideLogin}) => {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/users/login`, {
        data: {
          email: email,
          password: password
        }
      });
      const token = res.data.data.token;
      setToken(token);
      setUser(token, res.data.data.user._id, res.data.data.user.firstName);
      setMessage(null);
      hideLogin();
    } catch (e) {
      setMessage({ message: e });
      console.log(e);
    }
  }

  return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h4>Please log in to continue</h4>
        <input name="email" type="email" placeholder="email" onChange={handleChange} />
        <input name="password" type="password" placeholder="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Log in</button>
        <button small onClick={hideLogin}>Cancel</button>
        {message && <p>Sorry, your login or password was incorrect!</p>}
      </form>
  );
}

export default Login;