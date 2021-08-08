import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const initialState = {
    email: "",
    username: "",
    password: "",
};

function Signup() {
    const history = useHistory();
    const [userCredentials, setUserCredentials] = useState(initialState);
    

    // listening to the event
    const handleInput = ({ target }) => {
        setUserCredentials({ ...userCredentials, [target.name]: target.value });
    };

    // check weather password is matched
    

    const handleSignupAction = async (event) => {
        event.preventDefault();

        axios
            .post(process.env.REACT_APP_SIGNUP_URI, userCredentials)
            .then((res) => {
                console.log(res);
                history.push("/");
            })
            .catch((err) => console.error(err));
    };

    return (
        <div>
        <form method="POST" onSubmit={handleSignupAction}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email"  onChange={handleInput} />

        <label htmlFor="username">UserName:</label>
        <input type="text" name="username" id="username"  onChange={handleInput} />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password"  onChange={handleInput} /><br /><br />

      
        
        <input type="submit" value="submit">Login</input>
        <Link to="/signup">Signup</Link>

        </form>
            </div>
    );
}

export default Signup;