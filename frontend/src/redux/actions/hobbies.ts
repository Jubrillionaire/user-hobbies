import { ActionType } from "../actionTypes/hobbies";
import { hobbyInfo } from "../globalInterfaces";



interface AddHobbyAction {
    type: ActionType.ADD_HOBBY,
    payload: hobbyInfo
}


interface DeleteHobbyAction {
    type: ActionType.DELETE_HOBBY,
    payload: string
}

interface FetchHobbiesAction {
    type: ActionType.FETCH_HOBBIES,
    payload: hobbyInfo[]

}




export type Action = AddHobbyAction | DeleteHobbyAction | FetchHobbiesAction