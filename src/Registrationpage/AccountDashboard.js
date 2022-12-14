// import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Login_page/commen.css";


function AccountDashboard() {
  let location = useLocation();
  let registrationResult = location.state.registrationResult;
  return (
    <div className="account-dashboard">
      <h1>Dashbord</h1>
      <table border="1">
        <tbody>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Country</th>
            <th>Email id</th>
            <th>Mobile number</th>
            <th>Referral id</th>
          </tr>
          <tr>
            <td>{registrationResult.full_name}</td>
            <td>{registrationResult.username}</td>
            <td>{registrationResult.country_row_id}</td>
            <td>{registrationResult.email_id}</td>
            <td>{registrationResult.mobile_number}</td>
            <td>{registrationResult.referral_row_id}</td>
          </tr>
        </tbody>
      </table>
      <Link className="input_v" to='/loginpage'>
      <botton className="input_v">CLICK TO LOGIN PAGE </botton>
      </Link>
    </div>
  );
}
export default AccountDashboard;
