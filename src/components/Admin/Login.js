import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-logo">
          <img src="/assets/images/infamous_logo_black.png" alt="Infamous PR" />
        </div>
        <form className="login-form-box">
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
