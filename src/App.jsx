import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import HospitalLogin from "./Components/HospitalLogin";
import TermsCondition from "./Components/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import HospitalRegister from "./Components/HospitalRegister";
import DoctorRegister from "./Components/DoctorRegister";
import DoctorLogin from "./Components/DoctorLogin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/hospital_login" element={<HospitalLogin />} />
          <Route path="/hospital_register" element={<HospitalRegister />} />
          <Route path="/doctor_login" element={<DoctorLogin />} />
          <Route path="/doctor_register" element={<DoctorRegister />} />
          <Route path="/TermsandCondition" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
