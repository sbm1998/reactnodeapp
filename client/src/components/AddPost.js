import React,{useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestAddPost } from '../userThunk';



const AddData=()=>{
    const [state,setState]=useState({
        title:"",
        body:"",
    })
    const [error,setError]=useState(" ")
    let dispatch=useDispatch();
    let history=useHistory();
    const userId=useSelector((state)=>state.userData._id);

    const {title,body}=state;
    const handleAddData=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!title || !body){
            setError("Fill All the Value First");
        }
        else{
            dispatch(requestAddPost(state));
            console.log(state.title,state.body)
            history.push("/getusers");
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
export default AddData;
