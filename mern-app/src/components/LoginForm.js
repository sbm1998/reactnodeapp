import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Form} from "../components/Form";
import { authTrue, authFalse } from "../actions/authVerify";


const initialState = {
    email: "",
    password: "",
};

function LoginForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [loginCredentials, setLoginCredentials] = useState(initialState);

    const handleInput = ({ target }) => {
        setLoginCredentials({
            ...loginCredentials,
            [target.name]: target.value,
        });
    };
//
    const handleLoginAction = async (event) => {
        event.preventDefault();

        const result = await userLoginRequest(loginCredentials);
        console.log(`Result from loginForm`, result);

        if (result) {
            dispatch(authTrue());
            history.push("/Form")
        } else {
            dispatch(authFalse());
            history.push("/");
        }
    };

    return (
       <div>
           <form method="POST" onSubmit={handleLoginAction}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"  onChange={handleInput} />

        <label htmlFor="password">Password:</label>
        <input type="email" name="email" id="email"  onChange={handleInput} /><br /><br />

        <input type="submit" value="submit">SignUp</input>
        </form>
        <Link to="/">Signin</Link>

           </div>
           
    );
}

export default LoginForm;