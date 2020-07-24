import React from 'react';
import './Register.scss';

const Register = () => {

    const user = {
        name : "",
        username : "",
        password : ""
    }

    const nameChangeHandler = () => {

    }

    const usernameChangeHandler = () => {

    }

    const passwordChangeHandler = () => {

    }

    return (
        <div className="form-box form-register">
            <h3>Getting Started</h3>
            <div className="form-row">
                <span>Full name</span>
                <input type="text" value={user.name} onChange={nameChangeHandler} />
            </div>
            <div className="form-row">
                <span>User name or Email</span>
                <input type="text" value={user.username} onChange={usernameChangeHandler} />
            </div>
            <div className="form-row">
                <span>Create Password</span>
                <input type="password" value={user.password} onChange={passwordChangeHandler} />
            </div>
            <div className="form-row">
                <div className="btn" role="button">
                    <span>Sign up</span>
                </div>
            </div>
            <div className="form-row">
                <span className="form-detailed-spacement">Or</span>
            </div>
            <div className="form-row">
                Google
            </div>
            <div className="">
                <span>By signing up, you agree to <strong>Invision</strong></span>
                <span><a href="#">Terms of Conditions</a> and <a href="#">Privacy Policy</a></span>
                <span>Already on Invision? <a href="#">Log in</a></span>
            </div>
        </div>
    );
}

export default Register;