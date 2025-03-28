import React from "react";
import GamEd from "../Component/Card/GamEd";
import CreateAccountForm from "../Layouts/CreateAccountForm";
import "../styles/CreateAccountPage.css";

function CreateAccount() {
  return (
    <React.Fragment>
      <div className="create-accountBody-wrapper">
        <aside id="create-accountPage-aside">
          <div id="create-accountPage-card-wrapper">
            <GamEd />
          </div>
        </aside>
        <main id="create-accountPage-main">
          <CreateAccountForm />
        </main>
      </div>
    </React.Fragment>
  );
}

export default CreateAccount;
