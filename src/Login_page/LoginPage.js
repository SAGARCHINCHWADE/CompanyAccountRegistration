import React from "react";
import "../Login_page/commen.css";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const InitialValue = {
    login_id: "",
    password: "",
  };
  // chinging state of form values
  const [formValues, SetFormValues] = useState(InitialValue);
  // chinging state of form values
  const [formErrors, setFormErrors] = useState({});
  // submit state false to true
  const [isSubmit, setIsSubmit] = useState(false);

  // target the value from form
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });
  };
  // after click submit before post data validate it
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  let submitRegister = async () => {
    let data = {
      login_id: formValues.login_id,

      password: formValues.password,
    };
    const response = await fetch(
      "https://react-tasks-nodejs-api.herokuapp.com/user/login",
      {
        method: "POST",
        headers: {
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    let responseData = await response.json();
    console.log("sucessfully Register", responseData);
    await alert('Successfully submit')
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("candition ok");
      submitRegister();
      
    }
  }, [formErrors]);

  // conditions for form validation

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.email_id) {
    //   errors.email = "Email is required!";
    // } else if (!regex.test(values.email_id)) {
    //   errors.email = "This is not a valid email format!";
    // }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login_heading">
        <h1>Login</h1>
        <p>Enter your account login details.</p>
      </div>
      <div className="log_bottom">
        <div className="inner_login">
          <div className="input_inner">
            <div className="user_icon">
              <img src="log.png"></img>
            </div>
            <input
              className="input_v"
              type="email"
              placeholder="User name or Email"
              name="login_id"
              value={formValues.login_id}
              onChange={handleChange}
            ></input>
          </div>
          <span className="invalid_alert">{formErrors.login_id}</span>
          <div className="input_inner">
            <div className="user_icon">
              <img src="/LOCK.png"></img>
            </div>

            <input
              className="input_v"
              type="Password"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            ></input>
          </div>
          <span className="invalid_alert">{formErrors.password}</span>
          <button className="input_v">Sign in</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
