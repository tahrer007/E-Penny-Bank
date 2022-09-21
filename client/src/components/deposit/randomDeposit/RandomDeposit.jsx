import React , {useState , useEffect} from "react";
import "./randomDeposit.scss" ;

const RandomDeposit= ()=>{

    return(<div className="randomBox">

    <div className="leftSide">
        <div className="slider">slider</div>
        <div className="amount"> amount</div>

    </div>
    <div className="rightSide">
        <div className="random">random</div>
        <div className="reveal">reveal </div>
    </div>

    </div>)

}

export default RandomDeposit ;