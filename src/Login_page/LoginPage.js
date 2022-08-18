import React from "react";
import "./login.css";

const LoginPage = () => {
  return (
    <form >
      <div className="login_heading">
        <h1>Login</h1>
        <p>Enter your account login details.</p>
      </div>
      <div className="log_bottom">
        <div className="inner_login">
          <input className="input_v" placeholder="User name or Email"></input>
          <input className="input_v" placeholder="Password"></input>
          <button className="input_v">Sign in</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
