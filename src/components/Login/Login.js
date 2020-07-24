import React from 'react';
import './Login.scss';

const Login = () => {

    const [user, setUser] = React.useState({
        username : { value : "", init : true},
        password : { value : "", init : true},
    });

    const usernameChangeHandler = (e) => {
        setUser({
            ...user,
            username : { value : e.target.value, init : false }
        });
    }

    const passwordChangeHandler = (e) => {
        setUser({
            ...user, 
            password : { value : e.target.value, init : false }
        });
    }

    return (
        <div className="form-box form-login">
            <h3>Welcome to Invision</h3>
            <div className="form-row">
                <span>Users name or Email</span>
                <input type="text" placeholder="carolinagalvaosantos@gmail.com" value={user.username.value} onChange={usernameChangeHandler} />
            </div>
            <div className="form-row">
                <span>Password</span>
                <input type="password" placeholder="***************" value={user.password.value} onChange={passwordChangeHandler} />
            </div>
            <div className="form-row">
                <a href="#" className="link-gray">Forgot password?</a>
            </div>
            <div className="form-row">
                <div className="btn">
                    <span>Sign in</span>
                </div>
            </div>
            <div className="form-row">
                <div className="form-detailed-spacement">
                    <span>Or</span>
                </div>
            </div>
            <div className="form-row">
                <div className="btn-google" role="button">                    
                    <span>Sign in with Google</span>
                </div>
            </div>
            <div className="form-row">
                <h6>New <strong>Inivision?</strong> <a href="#">Create Account</a></h6>
            </div>
        </div>
    );
}

export default Login;