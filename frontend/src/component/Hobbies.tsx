import React, { ChangeEvent, FormEvent, useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHobby, deleteHobby } from "../redux/actionCreators/hobbies";
import { hobbyInfo } from "../redux/globalInterfaces";
import { RootState } from "../redux/reducers";


interface Iprops {
  selectedUser: string
}


const Hobbies: FC<Iprops> = ({ selectedUser }) => {


  interface Istate {
    user: string
    name: string,
    year: number,
    passionLevel: string
  }


  const dispatch = useDispatch();


  const { hobbies } = useSelector((state: RootState) => state.hobbies)

  const [formData, setFormData] = useState<Istate>({
    user: "",
    name: "",
    year: 0,
    passionLevel: ""
  })

  const clearForm = () => {
    setFormData({
      user: "",
      name: "",
      year: 0,
      passionLevel: ""
    })
  }





  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, year, passionLevel } = formData

    const apiData = {
      user: selectedUser,
      name,
      year,
      passionLevel
    }

    if (selectedUser) {
      dispatch(addHobby(apiData));
    } else {

      alert("please select a user")
    }
clearForm()

  };






  const handleChange = (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleDelete = (id: string, user_id: string) => {
    if (window.confirm("are you sure you want to delete?")) {
      dispatch(deleteHobby(id, user_id))
    };

  }


  return (
    <>
      <div className="table__column-hobbies">
        <form onSubmit={handleSubmit}>
          <select required name='passionLevel' onChange={handleChange} value={formData.passionLevel}>
            <option value="">Passion Level</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="very-high">Very High</option>
          </select>
          <input value={formData.name} required onChange={handleChange} name="name" placeholder='enter name' type="text" />
          <input value={formData.year} required onChange={handleChange} name="year" placeholder='enter year' type="number" />
          <button>Add</button>
        </form>
        {hobbies.length > 0 ? (
          <div className="table__column-hobbies-container">
            <ul>
              {hobbies && hobbies.map((hobby: hobbyInfo) => (
                <li className="table__column-hobbies-group">
                  <div>Passion: {hobby.passionLevel}</div>
                  {hobby.name}
                   <div>       Since {hobby.year} <span onClick={() => handleDelete(hobby._id, hobby.user)} ><i className="fa fa-trash"></i></span>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        )
          : (
            <div className="blank"></div>
          )
        }
      </div>
    </>
  );
};

export default Hobbies;
