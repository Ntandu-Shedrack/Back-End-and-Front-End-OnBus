import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './RegLogin.css';

const RegLogin = () => {
  const [isActive, setIsActive] = useState(false);
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerForm),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful! Return to Sign In page to Log in');
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/', {  // Assuming this is the login endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      if (response.ok) {
        // alert('Login successful!');
        history.push('/home');  // Redirect to HomePage after successful login
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <button type="button" className="icon"><i className="fa-brands fa-google-plus-g"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-facebook-f"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-github"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-linkedin-in"></i></button>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" value={registerForm.name} onChange={handleRegisterChange} />
          <input type="email" name="email" placeholder="Email" value={registerForm.email} onChange={handleRegisterChange} />
          <input type="password" name="password" placeholder="Password" value={registerForm.password} onChange={handleRegisterChange} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <button type="button" className="icon"><i className="fa-brands fa-google-plus-g"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-facebook-f"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-github"></i></button>
            <button type="button" className="icon"><i className="fa-brands fa-linkedin-in"></i></button>
          </div>
          <span>or use your email for login</span>
          <input type="email" name="email" placeholder="Email" value={loginForm.email} onChange={handleLoginChange} />
          <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleLoginChange} />
          <a href='.'>Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegLogin;
