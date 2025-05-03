import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage'
import PasswordVerification from './Pages/PasswordVerification';
import SuccessPage from "./Pages/SuccessPage"
import ErrorPage from './Pages/ErrorPage'
import Dashboard from './Pages/Dashboard';
import LeaderBoard from './Pages/LeaderBoard';
import PageNotFound from './Pages/PageNotFound';



const router = createBrowserRouter([
  {path:"/", element:<LandingPage />},
  {path: "/create-account", element: <CreateAccount />},
  {path: "/login", element: <LoginPage />},
  {path: "/password-verification", element: <PasswordVerification/>},
  {path: "/success", element: <SuccessPage />},
  {path: "/error", element: <ErrorPage />},
  {path: "/Dashboard", element: <Dashboard />},
  {path: "/LeaderBoard", element: <LeaderBoard />},
  {path: "*", element: <PageNotFound />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


