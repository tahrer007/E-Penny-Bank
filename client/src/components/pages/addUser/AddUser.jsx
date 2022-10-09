import React from 'react' ;
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
const boxKey = "2VDBz"
const  AddUser =() =>  {
    const user = useSelector(selectCurrentUser);
  return (
    <div>AddUser</div>
  )
}

export default AddUser ; 