import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../userThunk';



const AddUser=()=>{
    const [state,setState]=useState({
        name:"",
        email:"",
        password:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {name,email,password}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!name || !email || !password){
            setError("Fill All the Value First");
        }
        else{
            dispatch(signUp(state));
            console.log(state.name,state.email,state.password)
            history.push("/login");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2>Add Form</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="name">Name:</label><br/>
            <input type="text" id="fname" name="name" value={name} onChange={handleAddData}/><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" value={email} onChange={handleAddData}/><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" value={password} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default AddUser;
