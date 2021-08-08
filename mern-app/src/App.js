import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import Form from './components/Form';
import LoginForm from './components/LoginForm';
import Signup from './components/SignUp';
import UsersUpdate from './components/UsersUpdate'
import {useDispatch} from 'react-redux';
import {getData} from './actions/userAction'

function App() {
  const [currentId,setCurrentId] =useState(null);
  const dispatch=useDispatch(); 

useEffect(() => {
  dispatch(getData());
},[dispatch]);

  return (
    <div>
      <Router>
      <Switch>
     <Form currentId={currentId} setCurrentId={setCurrentId} /> 
     <UsersUpdate setCurrentId={setCurrentId} />
     <Route path="/" exact component={LoginForm} />
     <Route path="/signup" component={Signup} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
