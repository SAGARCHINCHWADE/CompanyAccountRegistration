import React from "react";
import "./Login_page/login.css";

const AccRegistration = () => {
  const InitialValue={{
    
   
    "full_name":{},
    "referral_row_id":{},
    "referral_username": {},
    "username": {},
    "email_id": {},
    "mobile_number": {},
    "country_row_id":{},
    
}}
  return (
    <form>
      <div className="login_heading">
        <h1>Register</h1>
        <p>Create your company account</p>
      </div>
      <div className="log_bottom">
        <div className="inner_login">
          <input
            className="input_v"
            type="text"
            placeholder="Full name*"
          ></input>
          <input
            className="input_v"
            type="text"
            placeholder="User Name*"
          ></input>
          <input
            className="input_v"
            type="text"
            placeholder="Select Country*"
          ></input>
          <input
            className="input_v"
            type="number"
            placeholder="Mobile Number"
          ></input>
          <input
            className="input_v"
            type="email"
            placeholder="Email Id"
          ></input>
          <input
            className="input_v"
            type="Password"
            placeholder="Password"
          ></input>
          <input
            className="input_v"
            type="text"
            placeholder="Referral Id"
          ></input>
          <button className="input_v">Register</button>
        </div>
      </div>
    </form>
  );
};

export default AccRegistration;
