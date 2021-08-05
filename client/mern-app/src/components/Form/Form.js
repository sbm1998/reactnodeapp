import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'; 
import {createPost,updatePost} from '../../actions/posts'
import {useSelector} from 'react-redux';

const Form =({currentId,setCurrentId})=>{
    const dispatch=useDispatch(); 
    const [postData,setPostData]=useState({name:" ",email:" ",city:" "});
    const post =useSelector((state)=>currentId ? state.posts.find((p)=>p.id==currentId):null)

    useEffect(() => {
        if (post) setPostData(post);
      }, [post]);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(postData))
        }else{
            dispatch(createPost(postData))
        }
        
        
        
    }


    return (
        <div>
            <h2>Add Form</h2>
            <form onSubmit={handleSubmit}>
            <label for="name">Name:</label><br/>
            <input type="text" id="name" name="name" value={postData.name} onChange={(e)=>setPostData({...postData,name:e.target.value})}/><br />
            <label for="eamil">Email:</label><br />
            <input type="text" id="email" name="email" value={postData.email} onChange={(e)=>setPostData({...postData,email:e.target.value})}/><br />
            <label for="city">City:</label><br />
            <input type="text" id="city" name="city" value={postData.city} onChange={(e)=>setPostData({...postData,city:e.target.value})}/><br />
            <input type="submit" value="Submit"/>
            </form>
            </div>

        )
}

export default Form;