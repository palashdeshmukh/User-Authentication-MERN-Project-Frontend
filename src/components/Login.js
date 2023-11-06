import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState(''); // To store the registration message
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const res = await fetch('https://user-authentication-mern-backend.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        // Successful login
        console.log('Before navigate');
        navigate('/home');
        console.log('After navigate');
      } else {
        // Handle login failure or server errors
        setMessage('User Not Found Pls Signup');
        console.log('Login failed');
      }
    } catch (error) {
      // Handle network request errors
      console.error('Network request error:', error);
    }
  }

  return (
    <div style={{ height: "100vh" }} className='p-3 d-flex justify-content-center align-items-center user-select-none'>
      <form className='shadow rounded px-5 py-4 w-auto' onSubmit={handleSubmit}>
        <h1 className='text-center pb-2'>Login</h1>
        {message && <p className='text-center'>{message}</p>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='username' onChange={handleForm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' onChange={handleForm} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me?</label>
        </div>
        <div id='button-container' className='d-grid text-center p-2 gap-3'>
          <button type="submit" className="btn btn-sm btn-primary">Submit</button>
          <p>Not a member? <Link to="/signup">Signup now</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
