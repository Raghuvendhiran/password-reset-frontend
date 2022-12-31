import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Dashboard from "./Component/Dashboard";
import ForgetPassword from "./Component/forgetPassword";
import Data from "./Component/Data";
import ResetPassword from "./Component/ResetPassword";
import StringVerify from './Component/StringVerify';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signIn" element={<Data />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/verifyString" element={<StringVerify />} />
        <Route path="/PasswordReset/:userString/:userId" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
