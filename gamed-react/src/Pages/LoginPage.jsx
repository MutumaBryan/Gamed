import React from "react";
import GamEd from "../Component/Card/GamEd";
import LogInForm from "../Layouts/LogInForm";
import "../Styles/CreateAccountPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="create-accountBody-wrapper">
        <aside id="create-accountPage-aside">
          <div id="create-accountPage-card-wrapper">
            <GamEd />
          </div>
        </aside>

        <main>
          <LogInForm />
        </main>
      </div>
    </>
  );
};

export default LoginPage;
