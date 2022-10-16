import React, { useState, useEffect } from "react";
import RandomDeposit from "components/deposit/randomDeposit/RandomDeposit";
import ExactDeposit from "components/deposit/exactDeposit/ExactDeposit";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MainButtons from "components/deposit/mainButtons/MainButtons";
import "./deposit.scss";

const RANDOM = "random";
const EXACT = "exact";
const Deposit = () => {
  const { boxId } = useParams();
  const location = useLocation();
  const { box } = location.state;
  const [type, setType] = useState(RANDOM);
  //const onChangeSelection = (e) => setRandomSlected(!randomSelected);
  const [amount, setAmount] = useState(null);
  //TODO:remove from the first time amount

  const onChangeSelection = (e) => {
    setType(e.target.value);
    setAmount(null);
  };
  const getValue = (value) => setAmount(value);


  return (
    <section className="innerContainer depositSection">
      <header>
        <div className="title">
          <h2>Lets save money</h2>
        </div>
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
          <RandomDeposit getValue={getValue}  />
        ) : (
          <ExactDeposit getValue={getValue} />
        )}
      </main>
      <footer>
        <MainButtons  value={amount}  boxId ={boxId}/>
      </footer>
    </section>
  );
};

export default Deposit;
/*  <div className="pageContainer depositPage">
      <div className="boxName">box name</div>
      <div className="optionsBox" onChange={(e) => onChangeSelection(e)}>
        <input
          className="radioBtn"
          type="radio"
          value={true}
          name="Random deposit"
          defaultChecked={true}
        />
        Random deposit
        <input
          className="radioBtn"
          type="radio"
          value={false}
          name="exact deposit"
        />
        exact deposit
      </div>
      <div className="selectedOptionBox">
        {randomSelected ? (
          <RandomDeposit addAmount={addAmount} />
        ) : (
          <ExactDeposit addAmount={addAmount} />
        )}
      </div>
      <div className="submitBtn" onClick={onDoneClicked}>
        {" "}
        button
      </div>
    </div> */
