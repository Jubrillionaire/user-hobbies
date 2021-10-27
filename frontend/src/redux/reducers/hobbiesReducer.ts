import {Action} from '../actions/hobbies'
import { ActionType } from "../actionTypes/hobbies";
import { hobbyInfo } from '../globalInterfaces';


interface IhobbyInfo {
    hobbies : hobbyInfo[]
}

const initialState = {
   hobbies: []
}



const usersReducer = (state : IhobbyInfo = initialState, action: Action) => {

   switch(action.type){

    case ActionType.FETCH_HOBBIES:
        return{
            ...state,
            hobbies: action.payload
        };
       case ActionType.ADD_HOBBY:
           return{
               ...state,
               hobbies: [...state.hobbies, action.payload]
           };

           case ActionType.DELETE_HOBBY:
            return{
                ...state,
                hobbies: state.hobbies.filter(x => x._id !== action.payload)
            }; 

           default: 
             return state
   }


}


export default usersReducer;