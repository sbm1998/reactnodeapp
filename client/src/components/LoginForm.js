import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../userThunk';



const AddUser=()=>{
    const [loginData,setLoginData]=useState({
        email:"",
        password:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    console.log(loginData);
    const {email,password}=loginData;

    console.log(email, 'email');
    console.log(password, 'password');

    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setLoginData({...loginData,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!email || !password){
            setError("Fill All the Value First");
        }
        else{
            dispatch(signIn(loginData));
            history.push("/home");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2><em>Login Form</em></h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" value={email} autoComplete="off" onChange={handleAddData}/><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default AddUser;
