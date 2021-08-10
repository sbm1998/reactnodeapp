import {CREATE_USER,SIGN_IN,SIGN_UP} from '../actions/index'

const initialState={
    users:{},
}

export default function userData(state=initialState,action){
    switch(action.type){
        case CREATE_USER :
            return{
                ...state,
                users:action.payload.users
            }
        case SIGN_IN :
            return{
                ...state,
                users:{...state.users, ...action.payload}
            }
        case SIGN_UP :
            return{
            ...state,
            users:{...state.users, ...action.payload}
                }
        default:
        return state
    }
    

}
