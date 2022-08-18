import "./App.css";
import AccRegistration from "./Registrationpage/AccRegistration";
import LoginPage from "./Login_page/LoginPage";
import AccountDashboard from "./Registrationpage/AccountDashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AccRegistration />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AccountDashboard" element={<AccountDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
