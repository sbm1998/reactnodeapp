import axios from 'axios';
import {createUser,signup,signin,getusers,deleteusers,updateusers,createPost,getPost,createComment,getComment} from './actions/allActions'
const URL = axios.create({
    baseURL:  'http://localhost:8080',
  });

export const requestCreateUser= (newdata) => {
    return async(dispatch)=>{
    try{
    const response=await URL.post('/posts',newdata);

    if(response.data) dispatch(createUser(response.data));
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
    
    dispatch(signin(signInData.data));
  } catch (error) {
    console.log(error);
  }
   }
}
export const requestgetusers=(state)=>{
  return async(dispatch)=>{
      try {
          console.log(state)
          const usersData=await URL.get("/getusers",state)
          console.log(usersData)
          dispatch(getusers(usersData.data))
      } catch (error) {
          console.log(error)
          
      }
  }
}

export const requestdeleteuser=(id)=>{
  return async(dispatch)=>{
      try {
          console.log(id)
          const deleteData= await URL.delete(`/users/${id}`)
          console.log(deleteData)
          dispatch(deleteusers(id))
      } catch (error) {
          console.log(error)
          
      }
  }
}

export const requestupdateuser=(id,data)=>{
  return async(dispatch)=>{
      try {
          console.log(id,data)
          const {updateData} = await URL.patch(`/edit/${id}`,data)
          console.log(updateData)
          dispatch(updateusers(updateData))
      } catch (error) {
          console.log(error)
          
      }
  }
}

export const requestAddPost= (newpost) => {
  return async(dispatch)=>{
  try{
  const response=await URL.post('/userpost',newpost);

  if(response.data) dispatch(createPost(response.data));
  }catch(err){
      console.log(err)
  }
 }
}

export const requestgetPost=(state)=>{
  return async(dispatch)=>{
      try {
          console.log(state)
          const usersData=await URL.get("/getuserspost",state)
          console.log(usersData)
          dispatch(getPost(usersData.data))
      } catch (error) {
          console.log(error)
          
      }
  }
}

export const requestAddComment= (newcomment) => {
  return async(dispatch)=>{
  try{
  const response=await URL.post('/usercomment',newcomment);

  if(response.data) dispatch(createComment(response.data));
  }catch(err){
      console.log(err)
  }
 }
}

export const requestgetComment=(state)=>{
  return async(dispatch)=>{
      try {
          console.log(state)
          const usersData=await URL.get("/getuserscomment",state)
          console.log(usersData)
          dispatch(getComment(usersData.data))
      } catch (error) {
          console.log(error)
          
      }
  }
}






