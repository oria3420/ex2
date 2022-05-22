import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_STATUSES } from "../../App";
import db from "../../config/db.config";
import "../Login/Login.css";

function Register({ setUserStatus, setUser }) {

  const navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    displayName: '',
    image: '',
    confirmPassword: '',
  });

  const handleChange = (event, field) => {
    setRegisterForm(
      curr => ({ ...curr, [field]: event.target.value })
    );
  }

  const addUser = (registerForm) => {
    const form = {
      username: registerForm.username,
      password: registerForm.password,
      image: registerForm.image,
      nickname: registerForm.displayName
    }
    console.log(db.length);
    db.push(form);
    setUser(form)
    console.log(db.length);

  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (registerForm.username === '' || registerForm.password === '' || registerForm.confirmPassword === '' || registerForm.displayName === '') {
      alert('Please fill all the fields!');
    }
    else {
      const user = db.find(user => user.username === registerForm.username);
      if (user !== undefined) {
        alert('Username is already taken');
      }
      else {
        if (registerForm.password !== registerForm.confirmPassword) {
          alert('Password and Confirm Password does not match');
        }
        else {
          if (!/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){6,}$/.test(registerForm.password)) {
            alert('Password must contain at least one alphabet and one number, and be at least 6 charcters');
          }
          else {
            addUser(registerForm);
            setUserStatus(USER_STATUSES.LOGGED_IN)
            alert('Registration completed successfully');
            setTimeout(() => navigate("/Chat"), 200);
          }
        }
      }
    }
  }

  return (
    <div className="bg">
      <nav className="navbar" id="screen-title">
        <div className="container-fluid">
          <a className="navbar-brand text-right" id="WebChat-text" onClick={() => navigate('/')}>
            <img src="WebChat logo.png" alt="" width="50" height="40" className="d-inline-block" style={{ margin: '0 5px' }} />
            WebChat
          </a>
        </div>
      </nav>

      <nav className="navbar  center rounded" id="log-in-navbar">

        <form className="col g-3 needs-validation" onSubmit={onSubmit} noValidate>

          <div className="mb-3 row">
            <i className="bi-person-fill">
              <label className="col-sm-2 col-form-label">Username</label>
            </i>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="register-username" onChange={(event) => handleChange(event, 'username')} value={registerForm.username} placeholder="Username" required />
            </div>
          </div>

          <div className="mb-4 row">
            <i className="bi-lock-fill">
              <label htmlFor="validationCustom01" className="col-sm-2 col-form-label">Password</label>
            </i>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="validationCustom01" placeholder="Password" onChange={(event) => handleChange(event, 'password')} value={registerForm.password} required />
            </div>
          </div>

          <div className="mb-4 row">
            <i className="bi-lock-fill">
              <label htmlFor="validationCustom01" className="col-sm-4 col-form-label">Confirm Password</label>
            </i>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="validationCustom01" placeholder="Confirm Password" onChange={(event) => handleChange(event, 'confirmPassword')} value={registerForm.confirmPassword} required />
            </div>
          </div>

          <div className="mb-4 row">
            <i className="bi-person-bounding-box">
              <label htmlFor="validationCustom01" className="col-sm-2 col-form-label">Display name</label>
            </i>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="validationCustom01" placeholder="Display name" required onChange={(event) => handleChange(event, 'displayName')} value={registerForm.displayName} />
            </div>
          </div>

          <div className="mb-4 row">
            <i className="bi bi-image">
              <label htmlFor="validationCustom01" className="col-sm-2 col-form-label">Image</label>
            </i>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="validationCustom01" aria-label="file example" onChange={(event) => handleChange(event, 'image')} value={registerForm.image} />
            </div>
          </div>

          <span className="col-12">
            <button className="btn btn-primary" type="submit">Register</button>
          </span>

          <span className="link">
            Already registered?
            <span
              className="link-primary clickable"
              style={{ margin: '0 5px' }}
              onClick={() => navigate('/')}
              >
              <u>click here</u>
            </span>
            to login
          </span>

        </form>

      </nav>
    </div>
  );
}

export default Register;