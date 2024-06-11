import React, { useState } from "react";
import "./loginReg.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform authentication here (e.g., API call) before redirecting
    history.push('/homePage');
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
