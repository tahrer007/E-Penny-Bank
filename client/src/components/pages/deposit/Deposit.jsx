import React, { useState, useEffect } from "react";
import RandomDeposit from "components/deposit/randomDeposit/RandomDeposit";
import ExactDeposit from "components/deposit/exactDeposit/ExactDeposit";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainButtons from "components/deposit/mainButtons/MainButtons";
import Header from "components/header/Header";
import "./deposit.scss";

const RANDOM = "random";
const EXACT = "exact";
const Deposit = () => {
  const { boxId } = useParams();
  const location = useLocation();
  const { box } = location.state;
  const [type, setType] = useState(RANDOM);
  //const onChangeSelection = (e) => setRandomSlected(!randomSelected);
  const [value, setValue] = useState(null);
  //TODO:remove from the first time value

  const onChangeSelection = (e) => {
    setType(e.target.value);
    setValue(null);
  };
  const getValue = (value) => setValue(value);

  return (
    <section className="innerContainer depositSection">
      <header>
        <Header from ={"deposit"}/>
        <div className="otherDetails">
          <div className="reward">
            Each deposit give you <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="boxDetails"> {box.boxName}</div>
        </div>
      </header>

      <main>
        <div className="depositOptions">
          <div className="optionWrapper">
            <input
              className="radioBtn"
              type="radio"
              value={RANDOM}
              name={RANDOM}
              checked={type === RANDOM}
              onChange={(e) => onChangeSelection(e)}
            />
            Random
          </div>

          <div className="optionWrapper">
            <input
              className="radioBtn"
              type="radio"
              value={EXACT}
              name={EXACT}
              checked={type === EXACT}
              onChange={(e) => onChangeSelection(e)}
            />
            Exact
          </div>
        </div>

        {type === RANDOM ? (
          <RandomDeposit getValue={getValue} />
        ) : (
          <ExactDeposit getValue={getValue} />
        )}
      </main>
      <footer>
        <MainButtons value={value} boxId={boxId} />
      </footer>
    </section>
  );
};

export default Deposit;
