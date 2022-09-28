import axios from "axios";
//import { React_App_BASE_URL } from "@env";

const baseURL = "https://saving-box.herokuapp.com/";
const apis = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

export default apis;
