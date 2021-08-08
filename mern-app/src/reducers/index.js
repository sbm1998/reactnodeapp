import {combineReducers} from 'redux';
import usersData from './usersData'
import authenticationReducer from './authenticationReducer';

export default combineReducers({
    usersData,
    authenticationReducer
});