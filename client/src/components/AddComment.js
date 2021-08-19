import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestAddComment } from '../userThunk';



const AddComment=()=>{
    const postId=useSelector((state)=>state.userData.setUserPost._id);
    const [state,setState]=useState({
        name:"",
        body:"",
        id:postId
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {name,body,id}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!name || !body || !id){
            setError("Fill All the Value First");
        }
        else{
            dispatch(requestAddComment(state));
            console.log(state.name,state.body,state.id)
            history.push("/getcomment");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2>Add User Comment</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" value={name} onChange={handleAddData}/><br />
            <label for="body">Body:</label><br />
            <input type="body" id="body" name="body" value={body} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default AddComment;