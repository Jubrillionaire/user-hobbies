import {Action} from '../actions/users'
import { ActionType } from "../actionTypes/users";
import { userInfo } from '../globalInterfaces';

const storageData = JSON.parse(localStorage.getItem("user_data") || '{}') 

interface IuserInfo {
    users : userInfo[]
}

const initialState = {
   users: []
}



const usersReducer = (state : IuserInfo = initialState, action: Action): IuserInfo => {

   switch(action.type){
    case ActionType.FETCH_USERS:
        return{
            ...state,
            users: action.payload
        };
       case ActionType.ADD_USER:
           return{
               ...state,
               users: [...state.users, action.payload]
           };
           default: 
             return state
   }


}


export default usersReducer;