import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { useAddUserMutation } from "features/boxes/boxesSlice";
///TODO : check if the user already partipate in the box !!

const boxKey = "2VDBz";
const AddUser = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();

  const canSave = boxKey && !isLoading;

  const onAddClick = async () => {
    if (canSave) {
      try {
        const test = await addUser({ boxKey, userId: user._id }).unwrap();
        console.log(test);

        navigate(`../../welcome`);
      } catch (err) {
        console.error("Failed to particpate !! ", err);
      }
    }
  };
  return (
    <div>
      <button onClick={onAddClick}>add me 😉</button>
    </div>
  );
};

export default AddUser;
