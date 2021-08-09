import './App.css';
//import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//
import LandingPage from './components/LandingPage';
// import AuthDataForm from './components/AuthDataForm'


function App() {
  


  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={LandingPage} />
       {/* <Route path="/auth" exact component={AuthDataForm} /> */}
     </Switch>
     </Router>
    </div>
  );
}

export default App;
