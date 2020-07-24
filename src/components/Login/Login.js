import React from 'react';
import './Login.scss';
import { Link } from "react-router-dom";

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
    
    const usernameValidation = () => {
        if(user.username.init)
        { return true }
        if(user.username.value.length < 1)
        { return false; }
        else
        { return true; }        
    }

    const passwordValidation = () => {
        if(user.password.init)
        { return true }
        if(user.password.value.length < 1)
        { return false; }
        else
        { return true; }        
    }

    const allFieldsValidation = () => {
        user.username.init = false;
        user.password.init = false;
        
        setUser({...user});
        
        if(
            usernameValidation() &&
            passwordValidation()
        )
        {return true}
        else
        {return false}
    }

    const signInHandler = () => {
        
        if(allFieldsValidation())
        {
            //All Validated - Call BackEnd
        }
    }

    return (
        <div className="form-box form-login">
            <h3>Welcome to Invision</h3>
            <div className={"form-row " + (!usernameValidation() ? "form-error" : "" )}>  
                <span>Users name or Email</span>
                <input type="text"
                placeholder="carolinagalvaosantos@gmail.com"
                value={user.username.value}
                onBlur={() => {setUser({...user, username : { value : user.username.value, init : false } })}}
                onChange={usernameChangeHandler} />
            </div>
            <div className={"form-row " + (!passwordValidation() ? "form-error" : "" )}>  
                <span>Password</span>
                <input type="password"
                placeholder="***************"
                value={user.password.value}
                onBlur={() => {setUser({...user, password : { value : user.password.value, init : false } })}}
                onChange={passwordChangeHandler} />
            </div>
            <div className="form-row">
                <a className="link-gray">Forgot password?</a>
            </div>
            <div className="form-row">
                <div className="btn" onClick={signInHandler}>
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
                <h6>New <strong>Inivision?</strong> <Link to={"/register"}>Create Account</Link></h6>
                
            </div>
        </div>
    );
}

export default Login;