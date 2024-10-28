import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from "./pages/Login";
import LandingPage from './pages/LandingPage';
import FooterComponent from './components/commonComponents/Footer';
import NavBar from './components/commonComponents/NavBar';
import './App.css';

function App() {
  const location = useLocation();
  const footerRoutes = ['/sign-up', '/login'];
  const showFooter = footerRoutes.includes(location.pathname);

  return (
    <div>
     
      {!showFooter &&  <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!showFooter && <FooterComponent />}
    </div>
  );
}
export default App;