import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {signin,signup} from '../actions/authenticationAction'


const initialState = {
    email: "",
    username: "",
    password: "",
};

function Signup() {
    const [userCredentials, setUserCredentials] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    


    const handleInput = ({ target }) => {
        setUserCredentials({ ...userCredentials, [target.name]: target.value });
    };

    const handleSignupAction = async (e) => {
        e.preventDefault();
    if (isSignup) {
      dispatch(signup(userCredentials, history));
      
    } else {
      dispatch(signin(userCredentials, history));
    }
    
    };
    const pageSwitch = () => {
        userCredentials(initialState);
        setUserCredentials((prevIsSignup) => !prevIsSignup);
      };
//
    return (
        <div>
        <form method="POST" onSubmit={handleSignupAction}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"  onChange={handleInput} />

        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" id="username"  onChange={handleInput} />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"  onChange={handleInput} /><br /><br />

      
        
        <input type="submit" value={isSignUp ? 'SignUp':'Sign In'}/>
        <input type="submit" onClick={pageSwitch} value={ isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }/>


        </form>
            </div>
    );
}

export default Signup;