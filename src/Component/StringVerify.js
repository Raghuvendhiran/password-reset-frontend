import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";



const StringVerify = () => {

  // const [success, setSuccess] = useState(true);

  const [String, SetString] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BaseURl}/verifyString`;
      const { data } = await axios.post(url, { String })
      setMsg(data.message);
      setError("");
      // setSuccess(false)
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
      <div className="container">
        <form className="container" onSubmit={handleSubmit}>
          <h1>String Verify</h1>
          <input
            type="input"
            placeholder="String Verify"
            name="String"
            onChange={(e) => SetString(e.target.value)}
            value={String}
            className="input mt-5"
          />
          <button type="submit" className="btn btn-success ms-5">
            Submit
          </button>


          {/* {success ? (
            <p className="text-success mt-1 mt-3">Enter the Valid String for Reset Password</p>
          ) : (
            <Link type="submit" to="/PasswordReset" className="btn btn-info ms-5">
              ResetPasswordButton
            </Link>
          )} */}

          {error && <div className="my-4">{error}</div>}
          {msg && <div className="my-4">{msg}</div>}


        </form>
      </div>
    </>
  );
};

export default StringVerify;
