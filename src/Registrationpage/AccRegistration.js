import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ragister.css";

const AccRegistration = () => {
  const navigate = useNavigate();

  const InitialValue = {
    full_name: "",
    referral_row_id: "",
    referral_username: "",
    username: "",
    email_id: "",
    mobile_number: "",
    country_row_id: "",
    password: "",
  };
  const [formValues, SetFormValues] = useState(InitialValue);

  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });

    // console.log(formValues)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  let submitRegister = async () => {
    let data = {
      full_name: formValues.full_name,
      username: formValues.username,
      referral_id: formValues.referral_row_id,
      email_id: formValues.email_id,
      country_row_id: formValues.country_row_id,
      mobile_number: formValues.mobile_number,
      password: formValues.password,
    };
    // post data
    const response = await fetch(
      "https://react-tasks-nodejs-api.herokuapp.com/user/register",
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
    if (responseData.status === true) {
      navigate("/AccountDashboard", {
        state: { registrationResult: responseData.message },
      });
    } else {
      alert(JSON.stringify(responseData.message));
    }
  };
  // after validate data post

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      submitRegister();
    }
  }, [formErrors]);

  // conditions for form validation

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) {
      errors.full_name = "Full Name is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.country_row_id) {
      errors.country_row_id = "Country Id is required!";
    }
    if (values.mobile_number.length < 10) {
      errors.mobile_number = "Mobile number is not valid!";
    }
    if (!values.email_id) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email_id)) {
      errors.email = "This is not a valid email format!";
    }

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
    <div>
      <form onSubmit={handleSubmit}>
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
              name="full_name"
              value={formValues.full_name}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.full_name}</span>

            <input
              className="input_v"
              type="text"
              placeholder="User Name*"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.username}</span>

            <input
              className="input_v"
              type="text"
              placeholder="Select Country*"
              name="country_row_id"
              value={formValues.country_row_id}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.country_row_id}</span>

            <input
              className="input_v"
              type="number"
              placeholder="MobileNumber*"
              name="mobile_number"
              value={formValues.mobile_number}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.mobile_number}</span>

            <input
              className="input_v"
              type="email"
              placeholder="Email Id*"
              name="email_id"
              value={formValues.email_id}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.email_id}</span>

            <input
              className="input_v"
              type="Password"
              placeholder="Password*"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            ></input>
            <span className="invalid_alert">{formErrors.password}</span>

            <input
              className="input_v"
              type="text"
              placeholder="Referral Id"
              name="referral_row_id"
              value={formValues.referral_row_id}
              onChange={handleChange}
            ></input>

            <button className="input_v">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccRegistration;
