import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../actions/index';

export default function usersData(users = [], action){
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map((users) => (users._id === action.payload._id ? action.payload : users));
    case DELETE:
      return users.filter((users) => users._id !== action.payload);
    default:
      return users;
  }
}; 
