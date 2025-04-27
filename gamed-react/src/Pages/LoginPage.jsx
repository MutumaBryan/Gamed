import React, { useState, useEffect } from "react";
import GamEd from "../Component/Card/GamEd";
import LogInForm from "../Layouts/LogInForm";
import "../Styles/LoginPage.css";

function ResponsiveAside() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return null;
  }

  return (
    <aside id="loginPage-aside">
      <div id="loginPage-card-container">
        <GamEd />
      </div>
    </aside>
  );
}

const LoginPage = () => {
  return (
    <>
      <div id="login-page-wrapper">
        <ResponsiveAside />
        <main id="loginpage-main">
          <div>
            <LogInForm />
          </div>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
