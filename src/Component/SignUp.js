import React from 'react'
import { useState } from "react";
import axios from "axios";


function SignUp({ toggleState }) {

    const [success, setSuccess] = useState(false);
    const [register, setRegister] = useState({
        Name: "",
        Email: "",
        Password: "",
        String: ""
    });

    const handleChange = (val) => {
        return setRegister(e => {
            return { ...e, ...val }
        })
    };

    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_BaseURl}/register`, register);
            if (res) {
                setRegister({
                    Name: "",
                    Email: "",
                    Password: "",
                    String: ""
                })
                setSuccess(true)

            }
        } catch (err) {
            console.log("Register failed", err)
        }
    };


    return (
        <>
            <div className={toggleState === 2 ? "content active-content tab-content" : "content"}>
                <div className="tab-pane" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form onSubmit={handleSumbit}>

                        <div className="text-center mb-3">
                            <div className="text-center mb-3">
                                <h5 className="my-4">Sign up with:</h5>
                                <a target="_blank" rel="noopener noreferrer" href="https://accounts.google.com/signup/v2/webcreateaccount?biz=false&cc=IN&dsh=S1175153559%3A1671108668893831&flowEntry=SignUp&flowName=GlifWebSignIn&ifkv=AeAAQh7eeHd9GBiym4gzL8sSr-IVbqDlEKCAe8L4VdXJ8mDymaQYEahJQ3d5hE7V0btcgxJf2iJLWg" type="button" className="btn btn-secondary btn-floating mx-1" style={{ backgroundColor: "#dd4b39" }}>
                                    <i className="fab fa-google" ></i>
                                </a>
                                <a type="button" rel="noopener noreferrer" target="_blank" href="https://github.com/signup?source=login" className="btn btn-secondary btn-floating mx-1" style={{ backgroundColor: "#333333" }}>
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                            <h5 className="text-center my-4">or:</h5>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="text" id="registerName" className="form-control" value={register.Name} onChange={e => handleChange({ Name: e.target.value })} />
                            <label className="form-label" >Name</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="email" id="registerEmail" className="form-control" value={register.Email} onChange={e => handleChange({ Email: e.target.value })} />
                            <label className="form-label" >Email</label>
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="registerPassword" className="form-control" value={register.Password} onChange={e => handleChange({ Password: e.target.value })} />
                            <label className="form-label" >Password</label>
                        </div>

                        {success ? (
                            <p className="text-success mt-1">You Are Registered Successfully</p>
                        ) : (
                            <p className="text-danger mt-1">You Are Not Registered</p>
                        )}

                        <button type="submit" className="btn btn-primary btn-block ">Sumbit</button>

                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUp;