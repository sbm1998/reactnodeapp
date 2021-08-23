import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestAddTask} from '../userThunk';

const AddTask=()=>{
    const username=useSelector((state)=>state.userData.name);
    console.log(username)
    const [state,setState]=useState({
        title:"",
        date:"",
        stime:"",
        etime:"",
        user:username,
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {title,date,stime,etime,user}=state;
    const handleAddTask=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!title || !date || !stime || !etime || !user){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.title,state.date,state.stime,state.etime,state.user)
            dispatch(requestAddTask(state));
            history.push("/getuserspost");
            setError("");
        }
}
return(
    <div>
        <center>
        <h2>Add Task Form</h2>
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
        <label for="title">Title:</label><br/>
        <input type="text" id="title" name="title" value={title} onChange={handleAddTask}/><br />
        <label for="date">Date:</label><br />
        <input type="date" id="date" name="date" value={date} onChange={handleAddTask}/><br />
        <label for="time">Start Time:</label><br />
        <input type="time" id="time" name="stime" value={stime} onChange={handleAddTask}/><br />
        <label for="time">End Time:</label><br />
        <input type="time" id="time" name="etime" value={etime} onChange={handleAddTask}/><br />
        <label for="user">User:</label><br />
        <input type="text" id="user" name="user" value={user} onChange={handleAddTask} readOnly/><br />
        <input type="submit" value="Submit"/>
        </form>
        </center>
        </div>
)
}
export default AddTask;

