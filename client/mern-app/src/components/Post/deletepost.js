import React, { useState, useEffect } from 'react';
import { deletePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

const Post =()=>{
    
    return (
        <>
        <button type="button" onClick={()=>dispatch(deletePost(post.id))}>Delete</button>
        </>
        )
}

export default Posts; 