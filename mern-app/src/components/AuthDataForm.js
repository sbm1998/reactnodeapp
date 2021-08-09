import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../actions/authenticationAction';
const initialState = { name: '', email: '', password: '' };

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, history));
      
    } else {
      dispatch(signin(form, history));
    }
    
  };



  return (
        <div>
        <h2>{ isSignup ? 'Sign up' : 'Sign in' }</h2>
        <form onSubmit={handleSubmit}>
            { isSignup && (
            <div>
                <label>First Name:</label>
              <input name="name" value={form.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/><br/><br/>
            
            </div>
            )}
            <label>Email:</label>
            <input name="email" value={form.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" /><br/><br/>
            <label>Password</label>
            <input name="password" value={form.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password"  /><br/><br/>
            
            { isSignup }
          <input type="submit"  value={ isSignup ? 'Sign Up' : 'Sign In' }/><br/><br/>
          <input type="submit" onClick={switchMode} value={ isSignup ? ' have account? Sign in' : "Don't have an account? Sign Up" }/>

</form>
    
   

       
        </div>
      );
};

export default SignUp;