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
import PatientOTP from "./Components/PatientOTP";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/HospitalLogin" element={<HospitalLogin />} />
          <Route path="/HospitalRegister" element={<HospitalRegister />} />
          <Route path="/DoctorLogin" element={<DoctorLogin />} />
          <Route path="/DoctorRegister" element={<DoctorRegister />} />
          <Route path="/PatientOTP" element={<PatientOTP />} />
          <Route path="/TermsandCondition" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
