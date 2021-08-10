import axios from 'axios';
import {createUser,signup} from './actions/allActions'
const URL = axios.create({
    baseURL:  'http://localhost:8080',
  });

export const requestCreateUser= (newdata) => {
    return async(dispatch)=>{
    try{
    const response=await URL.post(URL,newdata);
    
    dispatch(createUser(response.data));
    }catch(err){
        console.log(err)
    }
   }
}
export const signUp = (formdata) => {
    return async(dispatch)=>{
    try{
    const signUpData=await URL.post('/signup', formdata);
    
    dispatch(signup(signUpData.data));
  } catch (error) {
    console.log(error);
  }
   }
}

export const signIn = (formdata) => {
    return async(dispatch)=>{
    try{
    const signInData=await URL.post('/signin', formdata);
    
    dispatch(signup(signInData.data));
  } catch (error) {
    console.log(error);
  }
   }
}



