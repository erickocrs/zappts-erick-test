import React from 'react';
import './Register.scss';
import { Link } from "react-router-dom";

const Register = () => {

    const [user, setUser] = React.useState({
        name : { value : "", init : true},
        username : { value : "", init : true},
        password : { value : "", init : true},
    });

    const nameChangeHandler = (e) => {
        setUser({
            ...user,
            name : { value : e.target.value, init : false }
        });
    }

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
    
    const nameValidation = () => {
        if(user.name.init)
        { return true }
        if(user.name.value.length < 1)
        { return false; }
        else
        { return true; }        
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
        user.name.init = false;
        user.username.init = false;
        user.password.init = false;
        
        setUser({...user});
        
        if(
            nameValidation() &&
            usernameValidation() &&
            passwordValidation()
        )
        {return true}
        else
        {return false}
    }

    const signUpHandler = () => {
        
        if(allFieldsValidation())
        {
            //All Validated - Call BackEnd
        }
    }

    return (
        <div className="form-box form-register">
            <h3>Getting Started</h3>
            <div className={"form-row " + (!nameValidation() ? "form-error" : "" )}>  
                <span>Full name</span>
                <input type="text"
                placeholder="Carolina Galvão dos Santos Zaglia"
                value={user.name.value}
                onBlur={() => {setUser({...user, name : { value : user.name.value, init : false } })}}
                onChange={nameChangeHandler} />
            </div>
            <div className={"form-row " + (!usernameValidation() ? "form-error" : "" )}>  
                <span>Users name or Email</span>
                <input type="text"
                placeholder="carolinagalvaosantos@gmail.com"
                value={user.username.value}
                onBlur={() => {setUser({...user, username : { value : user.username.value, init : false } })}}
                onChange={usernameChangeHandler} />
            </div>
            <div className={"form-row " + (!passwordValidation() ? "form-error" : "" )}>  
                <span>Create Password</span>
                <input type="password"
                placeholder="***************"
                value={user.password.value}
                onBlur={() => {setUser({...user, password : { value : user.password.value, init : false } })}}
                onChange={passwordChangeHandler} />
            </div>
            <div className="form-row">
                <div className="btn" role="button" onClick={signUpHandler}>
                    <span>Sign up</span>
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
                <p>By signing up, you agree to <strong>Invision</strong></p>
                <h4><a>Terms of Conditions</a> and <a>Privacy Policy</a></h4>
                <p>Already on <strong>Invision</strong>?  <Link to={"/"}>Log in</Link></p>
            </div>
        </div>
    );
}

export default Register;