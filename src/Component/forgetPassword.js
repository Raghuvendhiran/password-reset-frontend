import React from 'react';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ForgetPassword() {



  const [success, setSuccess] = useState(false);
  const [Email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BaseURl}/forgetPassword`;
      const { data } = await axios.post(url, { Email })
      setMsg(data.message);
      setError("");
      setSuccess(true)

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <>

      <div className="mt-5 container d-grid gap-2 col-4 card text-center" style={{ width: "#FF9933" }}>
        <div className="card-header h5 text-white bg-primary">Password Reset</div>
        <form onSubmit={handleSubmit}>
          <div className="card-body" >
            <p className="card-text py-2">
              Enter your email address and we'll send you an email with String to reset your password.
            </p>
            <div className="form-outline">
              <input type="email" id="typeEmail" className="form-control my-3" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)}
              />
              {error && <div className="my-4" >{error}</div>}
              {msg && <div className="my-4" >{msg}</div>}

              {success ? (
                <p className="text-success mt-1">Link Sent Successfully</p>
              ) : (
                <p className="text-danger mt-1">String not Send, please enter Register Email </p>
              )}
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            <Link to="/" className="btn btn-info ms-3 ">
              Home Page
            </Link>
          </div>
        </form>
      </div>
    </>

  )
}

export default ForgetPassword;

