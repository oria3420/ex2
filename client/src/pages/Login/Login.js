import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_STATUSES } from "../../App";
import { db, DEFAULT_IMAGE} from "../../config/db.config";
import {server} from "../../config/db.config";

import "./Login.css";

function Login({setUser, setUserStatus}) {
    const [loginForm, setLoginForm] = useState({password: '', username: ''})
    
    const navigate = useNavigate()

    const handleChange = (event, field) => {
        setLoginForm(
            curr => ({ ...curr, [field]: event.target.value })
        );
    }

    async function onSubmit(event) {
        event.preventDefault();
        if(loginForm.username.trim()==='' || loginForm.password.trim()===''){
            alert('Please fill all the fields!');
        }

        var postBody = { "userId": loginForm.username, "password": loginForm.password };
        var params = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(postBody)
        }

        var response = await fetch(server+"/users/signin",params);
        if(response.status === 200) {
            var data = await response.json();
            var user = { username: loginForm.username, password: loginForm.password, image: DEFAULT_IMAGE, 
                nickname: data.name };
            setUser(user)
            setUserStatus(USER_STATUSES.LOGGED_IN)
            setTimeout(() => navigate("/Chat"), 200)
        }
        else {
            alert('Invalid password or username!');
        }
    }

    return (
        <div className="bg">
            <nav className="navbar" id="screen-title">
                <div className="container-fluid">
                    <a className="navbar-brand text-right" id="WebChat-text" href="/">
                        <img src="WebChat logo.png" alt="" width="50" height="40" className="d-inline-block" style={{ margin: '0 5px' }} />
                        WebChat
                    </a>
                </div>
            </nav>

            <nav className="navbar  center rounded" id="log-in-navbar">

                <form className="col g-3 needs-validation" onSubmit={onSubmit} noValidate>
                    <div className="mb-3 row">
                        <i className="bi-person-fill">
                            <label htmlFor="validationCustom01" className="col-sm-2 col-form-label">Username</label>
                        </i>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={(event) => handleChange(event, 'username')} value={loginForm.username} placeholder="Username" required />
                        </div>
                    </div>

                    <div className="mb-4 row">
                        <i className="bi-lock-fill">
                            <label htmlFor="validationCustom01" className="col-sm-2 col-form-label">Password</label>
                        </i>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" onChange={(event) => handleChange(event, 'password')} value={loginForm.password} placeholder="Password" required />
                        </div>
                    </div>


                    <span className="col-12">
                        <a href="chatScreen.html"><button className="btn btn-primary" type="submit">Login</button></a>
                    </span>
                    <span className="link">
                        Not registered?
                        <span
                            className="link-primary clickable"
                            style={{ margin: '0 5px' }}
                            onClick={() => navigate('/Register')}
                        >
                            <u>click here</u>
                        </span>
                        to register
                    </span>

                </form>

            </nav>
        </div>
    );
}

export default Login;