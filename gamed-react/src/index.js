import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage'
import PasswordVerification from './Pages/PasswordVerification';
import SuccessPage from "./Pages/SuccessPage"
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard';
import LeaderBoard from './Pages/LeaderBoard';
import PageNotFound from './Pages/PageNotFound';
import ProficiencyTest from './Pages/ProficiencyTest';



// const router = createBrowserRouter([
//   {path:"/", element:<ProficiencyTest />},
//   {path: "/create-account", element: <CreateAccount />},
//   {path: "/login", element: <LoginPage />},
//   {path: "/password-verification", element: <PasswordVerification/>},
//   {path: "/success", element: <SuccessPage />},
//   {path: "/error", element: <ErrorPage />},
//   {path: "/Dashboard", element: <Dashboard />},
//   {path: "/LeaderBoard", element: <LeaderBoard />},
//   {path: "*", element: <PageNotFound />}
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/create-account' element={<CreateAccount />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/password-verification' element={<PasswordVerification />} />
      <Route path='/success' element={<SuccessPage />} />
      <Route path='/error' element={<ErrorPage />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/LeaderBoard' element={<LeaderBoard />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>
);


