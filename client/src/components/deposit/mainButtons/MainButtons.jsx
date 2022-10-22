import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "features/auth/authSlice";
import { useDepositMutation } from "features/boxes/boxesSlice";
import { useNavigate, useLocation } from "react-router-dom";

import "./mainBtnsD.scss";

function MainButtons({ value, boxId }) {

  const user = useSelector(selectCurrentUser);
  const location = useLocation();
  const navigate = useNavigate() ; 
  console.log(location);
  //const from = location.state?.from?.pathname;
  const from = `../../BoxesList`;
  console.log(from);
  const [deposit, { isLoading }] = useDepositMutation();

  const canSave = value && !isLoading;
  const onSaveClicked = async () => {
    if (canSave) {
      try {
        const test = await deposit({
          boxId,
          deposit: Number(value),
          userId: user._id,
        }).unwrap();
        console.log(test);

        navigate(from);
      } catch (err) {
        console.error("Failed to save the post", err);
      }
    }
    //TODO : update main scereen start after deposit !!
  };

  //const isAdmin = checkId(user._id, box.adminId);
  return (
    <div className="depositInnerBtns">
      <div
        className={`mainBtns columnFlex ${canSave ? "hoverable" : "disabled"} `}
        onClick={onSaveClicked}
      >
        <FontAwesomeIcon icon={faCircleDollarToSlot} />
        Save
      </div>
      <div
        className={`mainBtns columnFlex ${
          isLoading ? "disabled" : "hoverable"
        } `}
        onClick={()=>navigate(-1)}
      >
        <FontAwesomeIcon icon={faTrashCan} />
        Cancel
      </div>
    </div>
  );
}

export default MainButtons;
