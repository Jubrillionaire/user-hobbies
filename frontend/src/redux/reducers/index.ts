import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import hobbiesReducer from "./hobbiesReducer";




const reducers = combineReducers({
    users: usersReducer,
    hobbies: hobbiesReducer
})

export default reducers


export type RootState = ReturnType<typeof reducers>

