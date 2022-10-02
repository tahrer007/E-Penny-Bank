import axios from "axios";
//import { React_App_BASE_URL } from "@env";
//const baseURL = process.env.REACT_APP_BASE_URL;

//const baseURL = "https://saving-box.herokuapp.com/";
const baseURL = "http://localhost:5000/";
const apis = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

export default apis;
