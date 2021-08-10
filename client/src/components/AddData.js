import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestCreateUser } from '../userThunk';



const AddData=()=>{
    const [state,setState]=useState({
        name:"",
        email:"",
        city:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {name,email,city}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!name || !email || !city){
            setError("Fill All the Value First");
        }
        else{
            dispatch(requestCreateUser(state));
            console.log(state.name,state.email,state.city)
            history.push("/signup");
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
            <input type="text" id="name" name="name" value={name} onChange={handleAddData}/><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" value={email} onChange={handleAddData}/><br />
            <label for="city">City:</label><br />
            <input type="text" id="city" name="city" value={city} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default AddData;
