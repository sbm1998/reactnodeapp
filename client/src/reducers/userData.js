import {CREATE_USER,SIGN_IN,SIGN_UP,FETCH_ALL, DELETE_USER,UPDATE_USER,SET_USER} from '../actions/index'

const initialState={
    users:[],
    updateuser:[],
    token: localStorage.getItem("token"),
    _id:localStorage.getItem("_id"),
  
}

export default function userData(state=initialState,action){
    switch(action.type){
        case CREATE_USER :
            return{
                ...state,
                users: [...state.users, action.payload]
            }
            
        case FETCH_ALL:
            return{
                ...state,
                users:action.payload,
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
        case DELETE_USER:
            return {...state,
                users:  state.users.filter((user) => user._id !== action.payload)
            }
        case UPDATE_USER:
            return{
                ...state,
                users: state.users.map((user) => (user._id === action.payload._id ? action.payload : user))
            }
    
        case SET_USER:
            return{
                ...state,
                updateuser:{...state.updateuser,...action.payload}
            }

        default:
        return state
    }

    

}
