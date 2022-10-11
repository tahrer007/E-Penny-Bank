import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { useAddUserMutation ,selectBoxById} from "features/boxes/boxesSlice";
import { selectUserById } from "features/users/userSlice";
import { useEffect } from "react";
///TODO : check if the user already partipate in the box !!
const id = "6339f7d8453a2e923fff338d";
const boxKey = "2VDBz";
const AddUser = () => {
  const test = useSelector((state) => selectUserById(state, id));
  const test2 = useSelector((state) => selectBoxById(state, id));

  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [addUser, { isLoading }] = useAddUserMutation();

  const canSave = boxKey && !isLoading;
  useEffect(() => {
    console.log(test,test2);
  }, [test,test2]);

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
