import React, { ChangeEvent, FormEvent, useEffect, useState, FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHobbies } from "../redux/actionCreators/hobbies";
import { addUser, fetchUsers } from '../redux/actionCreators/users'
import { userInfo } from "../redux/globalInterfaces";
import { RootState } from "../redux/reducers";

interface Iprops {
    setSelectedUser(id : string) : void,
    selectedUser: string
  }
  

const User: FC <Iprops> =  ({setSelectedUser, selectedUser}) => {

    const [formData, setFormData] = useState<string>("")
    const {users} = useSelector((state: RootState) => state.users)


    


    console.log(users, "users")


    const dispatch = useDispatch();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formData){
            dispatch(addUser(formData));
        }else{
            alert("please enter a value") 
        
        }
        setFormData("")
      
    };

    useEffect(() => {
        dispatch(fetchUsers())
        
    }, [])


    const selectUser = (id: string) => {
             dispatch(fetchHobbies(id))
             setSelectedUser(id)
     };
    return (
        <>
            <div className="table__column-user">
                <form onSubmit={handleSubmit}>
                    <input required onChange={(e: ChangeEvent<HTMLInputElement>) => { setFormData(e.target.value) }} type="text" value={formData} name="username" />
                    <button>add</button>
                </form>

                <div className="table__column-user-container">
                    <ul className="table__column-user-list">
                        {users.map((user: userInfo) =>   <li className={selectedUser === user._id ? "focus" : ""} key={user._id} onClick={() => selectUser(user._id)}>{user.name}</li>)}
                    
                    </ul>
                </div>
            </div>
        </>
    );
};

export default User;
