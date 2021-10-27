import { UserInfo } from "os";
import { Dispatch } from "redux";
import { Action } from "../actions/users";
import { ActionType } from "../actionTypes/users";
import { hobbyInfo, userInfo } from "../globalInterfaces";

const url = 'http://localhost:5000/api/users'

const addUser = (user: string) => async (dispatch: Dispatch<Action>) => {
    try{

       const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({name: user})
        })

    const data = await response.json();

    console.log(data, "data")

    dispatch({
        type: ActionType.ADD_USER,
        payload: data.user
    })

    }catch(error){
        console.log("error")
    }
}

const fetchUsers = () => async (dispatch: Dispatch<Action>) => {
    try{

       const response =  await fetch(url)
       const data = await response.json();



    dispatch({
        type: ActionType.FETCH_USERS,
        payload: data.users
    })

    }catch(error){
        console.log("error")
    }
}




export {addUser, fetchUsers}
