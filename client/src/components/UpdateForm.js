import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestupdateuser } from '../userThunk';



const UpdateForm=()=>{
    let dispatch=useDispatch();
    let history=useHistory();

    const records=useSelector((state)=>state.userData.updateuser);
    const {_id,name,email,city}=records;

    const [updateData,setUpdateData]=useState({name:records.name,email:records.email,city:records.city});
    const handleAddData=(e)=>{
       setUpdateData({...updateData,[e.target.name]:e.target.value})
    }
    const handleSubmit= (e)=>{
            dispatch(requestupdateuser(_id,updateData));
            history.push("/getusers");
           
}
    return(
        <div>
            <center>
            <h2>Update Form</h2>
            <form onSubmit={handleSubmit}>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" defaultValue={records.name} onChange={handleAddData}/><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" defaultValue={records.email} onChange={handleAddData}/><br />
            <label for="city">City:</label><br />
            <input type="text" id="city" name="city" defaultValue={records.city} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default UpdateForm;
