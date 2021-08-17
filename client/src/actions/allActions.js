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
} from './index'

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

export const createComment=(payload)=>({
    type:CREATE_COMMENT,
    payload,
})

export const getComment=(payload)=>({
    type:GET_COMMENT,
    payload,
  })
  



