import './App.css';
import React, { useState, useEffect } from 'react';
import Posts from './components/Post/Posts'
import Form from './components/Form/Form'
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

function App() {
  const [currentId,setCurrentId] =useState(null);
  const dispatch=useDispatch(); 

useEffect(() => {
  dispatch(getPosts());
},[dispatch]);

  return (
    <div>
     <Posts setCurrentId ={setCurrentId}/>
     <Form currentId={currentId} setCurrentId={setCurrentId} /> 
    </div>
  );
}

export default App;
