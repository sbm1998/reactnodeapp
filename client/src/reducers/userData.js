import {CREATE_USER,
    SIGN_IN,SIGN_UP,
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
    AUTO_SEARCH,
} from '../actions/index'

const initialState={
    users:[],
    updateuser:[],
    posts:[],
    comment:[],
    userId:null,
    setUserPost:{},
    autoSearch:[],
    token: localStorage.getItem("token"),
    id:localStorage.getItem("id"),
    name:localStorage.getItem("name"),
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
            users:{...state.users, ...action.payload},
            token:action.payload.token,
            id:action.payload.id,
            name:action.payload.name
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

        case CREATE_POST:
            return{
                ...state,
                posts:[...state.posts,...action.payload]
            }
        case GET_POST:
            return{
                ...state,
                posts:action.payload,
                }
        case GET_POST_ID:
            return{
                ...state,
                userId:action.payload,
            }
        case CREATE_COMMENT:
            return{
                ...state,
                comment:[...state.comment,...action.payload]
                    }
        case GET_COMMENT:
            return{
                ...state,
                comment:action.payload,
                }
        case LOGIN_USER_POST:
            return{
                ...state,
                posts:action.payload
                    }
        case LOGIN_USER_COMMENT:
            return{
                ...state,
                comment:action.payload
                }
        case SET_USER_POST:
            return{
                ...state,
                setUserPost:{...state.setUserPost,...action.payload}
            }
        case AUTO_SEARCH:
            return{
                ...state,
                autoSearch:action.payload
            }
        default:
        return state
    }
}