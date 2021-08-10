import {
    CREATE_USER,
    SIGN_IN,
    SIGN_UP
} from './index'

export const createUser=(payload)=>({
    type:CREATE_USER,
    payload,
})
export const signin=(payload)=>({
    type:SIGN_IN,
    payload,
})

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})



