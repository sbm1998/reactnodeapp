import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestAddPost } from '../userThunk';



const AddPost=()=>{
    const postId=useSelector((state)=>state.userData.id);
    console.log(postId);
    const [state,setState]=useState({
        title:"",
        body:"",
        id:postId,
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();

    const {title,body,id}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!id || !title || !body){
            setError("Fill All the Value First");
        }
        else{
            console.log(state.title,state.body,state.id)
            dispatch(requestAddPost(state));
            history.push("/getuserspost");
            setError("");
    }
}
    return(
        <div>
            <center>
            <h2>Add User Post</h2>
            {error && <h3>{error}</h3>}
            <form onSubmit={handleSubmit}>
            <label for="title">Title:</label><br/>
            <input type="text" id="title" name="title" value={title} onChange={handleAddData}/><br />
            <label for="body">Body:</label><br />
            <input type="body" id="body" name="body" value={body} onChange={handleAddData}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </center>
            </div>

    )
}
export default AddPost;
