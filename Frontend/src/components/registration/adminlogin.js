import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adminlogin = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [statusError, setStatusError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "admin@gmail.com")
        {
            if(password == "admin@icwim"){
                window.localStorage.setItem("admintoken", "Admin LoggedIn");
                navigate('/admin-home');
            }
            else
                setStatusError("Invalid Password");
        }
        else{
            setStatusError("Invalid Admin Email");
        }


    }
    return (
        <div className='bg-color'>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="/static/img/logo-no-background.png"
                                className="img-fluid" alt="Phone image" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={handleSubmit}>
                                <span className="fs-1 fw-bold text-style">
                                    Admin Login Details
                                </span><br /><br />
                                <div className="form-floating mb-4">
                                    <input type="email" required id="useremail" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                    <label for="useremail">Email Address</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="password" required id="userpassword" className="form-control form-control-lg" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                    <label className="form-label" htmlFor="userpassword">Password</label>

                                </div>
                                
                                <div className="my-4">
                                    {statusError !== "" && (
                                        <div>
                                            <p className="text-danger fs-5">{statusError}</p>
                                        </div>
                                    )}
                                </div>
                                <div className='d-grid gap-2'>
                                    <button type="submit" className="btn btn-warning btn-lg">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Adminlogin;
