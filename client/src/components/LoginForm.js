import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../userThunk';



const AddUser=()=>{
    const [state,setState]=useState({
        email:"",
        password:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {email,password}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!email || !password){
            setError("Fill All the Value First");
        }
        else{
            dispatch(signIn(state));
            history.push("/addData");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2>Add Form</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
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
