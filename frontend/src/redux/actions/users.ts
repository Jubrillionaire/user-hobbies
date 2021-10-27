import { ActionType } from "../actionTypes/users";
import { userInfo } from "../globalInterfaces";



interface AddUserAction {
    type: ActionType.ADD_USER,
    payload: userInfo
}

interface FetchUsersAction {
    type: ActionType.FETCH_USERS,
    payload: userInfo[]
}





export type Action = AddUserAction | FetchUsersAction