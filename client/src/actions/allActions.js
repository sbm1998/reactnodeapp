import {
    CREATE_USER,
    SIGN_IN,
    SIGN_UP,
    FETCH_ALL,
    DELETE_USER,
    UPDATE_USER,
    SET_USER,
    CREATE_POST,
    GET_POST,
    CREATE_COMMENT,
    GET_COMMENT,
    GET_POST_ID,
    LOGIN_USER_POST,
    LOGIN_USER_COMMENT,
    SET_USER_POST,
    AUTO_SEARCH
} from './index'
import AutoSearch from '../components/AutoSearch';

export const createUser=(payload)=>{
    console.log(payload, 'adduser');
    return ({
    type:CREATE_USER,
    payload,
})}
export const signin=(payload)=>{
    console.log(payload.token)
    console.log(payload.result._id)
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.result._id)
    return{
    type:SIGN_IN,
    payload,
    }
}

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})

export const getusers=(payload)=>({
    type:FETCH_ALL,
    payload,
  })

export const deleteusers=(id)=>({
    type:DELETE_USER,
    payload:id,
})

export const updateusers=(id,data)=>({
    type:UPDATE_USER,
    payload:data,
    id:id
  })

export const setUser=(payload)=>({
    type:SET_USER,
    payload,
})

export const createPost=(payload)=>({
    type:CREATE_POST,
    payload,
})

export const getPost=(payload)=>({
    type:GET_POST,
    payload,
  })

export const getPostId=(payload)=>({
    type:GET_POST_ID,
    payload,
  })

export const createComment=(payload)=>({
    type:CREATE_COMMENT,
    payload,
})

export const getComment=(payload)=>({
    type:GET_COMMENT,
    payload,
  })
  
export const loginPost=(payload)=>({
    type:LOGIN_USER_POST,
    payload,
})

export const loginComment=(payload)=>({
    type:LOGIN_USER_COMMENT,
    payload,
})

export const setuserPost=(payload)=>({
    type:SET_USER_POST,
    payload,
})

export const autoSearch=(payload)=>({
    type:AUTO_SEARCH,
    payload,
})



