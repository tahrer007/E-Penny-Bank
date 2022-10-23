import React, { useState, useEffect } from "react";
import "./depositsLogs.scss";
import { useParams } from "react-router-dom";
import { useLocation ,useNavigate } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { selectUserById } from "features/users/userSlice";
import { checkId } from "utils/helper";
import { useSelector } from "react-redux";
import { changeDateFormate } from "utils/dateAndTimeFormate";
import Header from "components/header/Header";
import useUserInfo from "hooks/useUserInfo";
import {
  faPiggyBank,
  faUser,
  faUsers,
  faUserNinja,
  faDollarSign,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
function DepositsLogs() {
  const user = useSelector(selectCurrentUser);
  const { boxId } = useParams();
  const location = useLocation();
  const { box } = location.state;
  const navigate = useNavigate();
  if (!box) navigate("../../welcome");
  const { boxName, type, adminId, depositsHistory } = box;
  const [showAmount, setShowAmount] = useState(null);
  const {theme} = useUserInfo();

  const changeShow = (id) => {
    setShowAmount(id);
    setTimeout(() => {
      setShowAmount(false);
    }, 3000);
  };
  const canReveal = box.isAllowedToReveal || checkId(user._id, adminId);
  const admin = useSelector((state) => selectUserById(state, adminId));

  const Item = ({ log }) => {
    const x = useSelector((state) => selectUserById(state, log.userId));

    return (
      <div className="listItem logItem hoverable">
        <div className="date">{changeDateFormate(log?.createdAt)}</div>
        <div className="name">{x?.name}</div>
        <div
          className={`icons ${!canReveal && "disabled"}`}
          onClick={() => changeShow(log._id)}
        >
          {canReveal ? (
            showAmount === log._id ? (
              <span>
                <FontAwesomeIcon icon={faDollarSign} />
                {log?.amount}
              </span>
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className={`innerContainer depositsLogsSections ${theme}`}>
      <header>
        <Header from={"logs"} />
        <div className="otherDetails">
          <div className="icons">
            <FontAwesomeIcon icon={faPiggyBank} /> {boxName}
          </div>

          <div className="icons">
            <FontAwesomeIcon icon={type ? faUsers : faUser} />
          </div>
          {type ? (
            <div className="icons">
              <FontAwesomeIcon icon={faUserNinja} /> {admin.name}
            </div>
          ) : null}
        </div>
      </header>

      <main className="startColumnFlex">
        <div className="list logsList">
          {depositsHistory.map((log) => (
            <Item key={log._id} log={log} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default DepositsLogs;
