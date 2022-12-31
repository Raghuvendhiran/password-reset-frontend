import React from 'react';
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";



function Dashboard() {

  const [toggleState, settoggleState] = useState(2);

  const toggleTab = (i) => {
    settoggleState(i)
  }

  return (
    <>
      <div className="mt-5 container d-grid gap-2 col-4">
        <ul className=" nav nav-tabs nav-justified pb-2 " id="ex1" role="tablist" style={{ backgroundColor: "#FF9933" }}>
          <li className="mx-3 mt-3 nav-item" role="presentation">
            <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}>
              <button
                className="btn btn-primary px-5"
                id="tab-login"
                data-mdb-toggle="tab"
                data-mdb-target="#login"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >Login</button>
            </div>
          </li>

          <li className="mx-3 mt-3 nav-item" role="presentation">
            <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}>
              <button
                className="btn btn-primary px-5"
                id="tab-register"
                data-mdb-toggle="tab"
                data-mdb-target="#register"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >Register</button >
            </div>
          </li>
        </ul>

        <div className="my-5 container">
          <SignIn toggleState={toggleState} />
          <SignUp toggleState={toggleState} />
        </div>
      </div>


    </>
  )
}

export default Dashboard;