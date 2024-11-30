import React from "react";
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import {selectUser,logout} from "../features/userSlice";
import './Logout.css'

const Logout =()=>{
const user = useSelector(selectUser);
const dispatch= useDispatch();
const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Вызываем action logout
  };
    return(
        <div className="logout">
            <h1>
                Welcome <span className="user__name">{user? user.name:'Guest'}</span>
            </h1>
            <button className="logout__button"  onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout