import React, { useEffect, useState,  } from "react";
import User from "./User"
import Hobbies from "./Hobbies"


const Hobby = () => {


  const [selectedUser, setSelectedUser] = useState("")

  return (
    <div>
      <div className="table">
        <div className="table__header">
          <h2>User Hobbies</h2>
        </div>

        <div className="table__row">
          <User selectedUser={selectedUser}  setSelectedUser={setSelectedUser} />
         {  <Hobbies selectedUser={selectedUser} /> }
        </div>
      </div>
    </div>
  );
};

export default Hobby;
