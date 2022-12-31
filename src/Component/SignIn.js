import { React, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function SignIn({ toggleState }) {

    const [userCrenditial, setuserCrenditial] = useState({ Email: "", Password: "" })
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        return setuserCrenditial(() => {
            return { ...userCrenditial, ...e }
        })
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BaseURl}/signIn`, userCrenditial);
            await localStorage.setItem('userData', JSON.stringify(response.data));
            navigate("/signIn")
            setMsg(response.message);
            setError("");
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
    }


    return (
        <>
            <div className={toggleState === 1 ? "content active-content tab-content" : "content"}>
                <div className="tab-pane" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={handleSumbit}>
                        <div className="text-center mb-5">
                            <h5 className="my-4">Sign in with:</h5>

                            <a target="_blank" rel="noopener noreferrer" href="https://accounts.google.com/v3/signin/identifier?dsh=S1175153559%3A1671108668893831&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AeAAQh6N8C4ll6bYJU_fIzyO2yt0mlXGWNremxff2WMLdMoiVmLK_tFdaUpFnpLW-akJk51Zk8mpgA" type="button" className="btn btn-secondary btn-floating mx-1" style={{ backgroundColor: "#dd4b39" }}>
                                <i className="fab fa-google" ></i>
                            </a>

                            <a type="button" rel="noopener noreferrer" target="_blank" href="https://github.com/login" className="btn btn-secondary btn-floating mx-1" style={{ backgroundColor: "#333333" }}>
                                <i className="fab fa-github"></i>
                            </a>

                            <h5 className="text-center my-4 ">or:</h5>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" value={userCrenditial.Email} onChange={e => handleChange({ Email: e.target.value })} />
                            <label className="form-label" >Email</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" value={userCrenditial.Password} onChange={e => handleChange({ Password: e.target.value })} />
                            <label className="form-label" >Password</label>
                        </div>
                        {error && <div className="my-4" >{error}</div>}
                        {msg && <div className="my-4" >{msg}</div>}
                        <button type="submit" className="btn btn-primary " >Sign In</button>
                        <div className="row">
                            <div className=" d-flex justify-content-center my-3">
                                <Link className=" mt-2 btn btn-link" type="submit" to={"/forgetPassword"}>Forgot password?</Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;