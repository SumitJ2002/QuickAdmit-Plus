import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import TermsCondition from './Components/TermsConditions';
import PrivacyPolicy from './Components/PrivacyPolicy';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/TermsandCondition" element={<TermsCondition/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
