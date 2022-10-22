import React from "react";
import useUserInfo from "hooks/useUserInfo";
import Header from "components/header/Header";
import { changeDateFormate } from "utils/dateAndTimeFormate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./profile.scss";

export default function Profile() {
  const { user, theme } = useUserInfo();
  console.log(user);

  return (
    <section className={`innerContainer ${theme}`}>
      <header>
        <Header from="profile" />

        <div className="otherDetails"></div>
      </header>
      <main className="profile">
        <div className="pItem">
          <span>Name :</span>
          <span>{user?.name}</span>{" "}
        </div>
        <div className="pItem">
          <span>E-mail : </span>
          <span>{user?.email}</span>{" "}
        </div>
        <div className="pItem">
          <span>Join Date :</span>
          <span>{changeDateFormate(user?.createdAt)}</span>{" "}
        </div>
        <div className="pItem">
          <span>Last Deposit :</span>
          <span>{changeDateFormate(user?.updatedAt)}</span>{" "}
        </div>
        <div className="pItem">
          <span>Deposits counter :  </span>
         
          <span>
            {" "}
          {user?.rewards}
            <FontAwesomeIcon icon={faStar} /> 
            {" "}
          </span>
        </div>
      </main>
    </section>
  );
}
