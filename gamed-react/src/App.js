import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import CreateAccount from "./Pages/CreateAccount";
import PasswordVerification from "./Pages/PasswordVerification";
import SuccessPage from "./Pages/SuccessPage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/password-verification" element={<PasswordVerification />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
