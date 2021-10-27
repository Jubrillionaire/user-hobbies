import { Dispatch } from "redux";
import { Action } from "../actions/hobbies";
import { ActionType } from "../actionTypes/hobbies";
import { hobbyInfo, Ihobby } from "../globalInterfaces";

const url = 'http://localhost:5000/api/hobbies'


const addHobby = (hobby: Ihobby) => async (dispatch: Dispatch<Action>) => {

    console.log(hobby, "hobbbbbbb")
    try{

       const response =  await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(hobby)
        })

    const data = await response.json();

    console.log(data, 'hobby resp')

    dispatch({
        type: ActionType.ADD_HOBBY,
        payload: data.createdHobby
    })

    }catch(error){
        console.log(error)
    }
}

const fetchHobbies = (userId: string) => async (dispatch: Dispatch<Action>) => {
    try{

       const response =  await fetch(`${url}/${userId}`)

       const data = await response.json();

    dispatch({
        type: ActionType.FETCH_HOBBIES,
        payload: data.hobbies
    })

    }catch(error){
        console.log(error)
    }
}


const deleteHobby = (id: string, user_id: string) => async (dispatch: Dispatch<Action>) => {

   
    try{

        console.log(id, "id")

        dispatch({
            type: ActionType.DELETE_HOBBY,
            payload: id
         })

       await fetch(`${url}/${id}/${user_id}`, {
            method: 'DELETE',
        })




    }catch(error){
        console.log(error, "new error")
    }
}


export {addHobby, fetchHobbies, deleteHobby}


