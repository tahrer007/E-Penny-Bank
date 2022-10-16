import React, { useState, useEffect } from "react";
import "./depositsLogs.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { selectCurrentUser } from "features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faUser,
  faUsers,
  faUserNinja,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { selectAllUsers, selectUserById } from "features/users/userSlice";
import { checkId } from "services/helper";
import { useSelector } from "react-redux";
import { changeDateFormate } from "services/dateAndTimeFormate";

function DepositsLogs() {
  const user = useSelector(selectCurrentUser);
  const { boxId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { box } = location.state;
  const { boxName, type, adminId, depositsHistory } = box;
  const [show, setShow] = useState(false);

  console.log(box, boxId);
  const canReveal = box.isAllowedToReveal || checkId(user._id || adminId);
  const admin = useSelector((state) => selectUserById(state, adminId));

  const Item = ({ log }) => {
    console.log(log);
    const x = useSelector((state) => selectUserById(state, log.userId));

    return (
      <div className="listItem logItem">
        <div className="date">{changeDateFormate(log?.createdAt)}</div>
        <div className="name">{x?.name}</div>
        <div className="icons">
          <FontAwesomeIcon icon={faDollarSign} />
          {log?.amount}
        </div>
      </div>
    );
  };

  return (
    <section className="innerContainer depositsLogsSections">
      <header>
        <div className="title">
          <h2>Deposits history</h2>
        </div>
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
            <Item key={log.time} log={log} />
          ))}
        </div>
      </main>
    </section>
  );
}

export default DepositsLogs;
