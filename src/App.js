import "./App.css";
import LoginPage from "./Login_page/LoginPage";
import AccRegistration from "./AccRegistration";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AccRegistration />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        {/* <Route path="/AccRegistration" element={<AccRegistration />} /> */}
      </Routes>
    </div>
  );
}

export default App;
