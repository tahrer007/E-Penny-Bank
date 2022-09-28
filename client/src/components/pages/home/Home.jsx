import React , {useState , useEffect} from "react";
import "./home.scss" ;
//1- render loadig 
//2-check local sortage ; 
// if has data ... check for update  else login page
//if has data without inter net connection .. load latest data with offline message 
//form contain auto log in 
//

const Home= ()=>{

    const [loading,setLoading]=useState(true);

    return(<div className="pageContainer homePage">home</div>)

}

export default Home ;