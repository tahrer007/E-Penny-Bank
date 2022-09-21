import axios from "axios";
import { React_App_BASE_URL } from "@env";

const baseURL = React_App_BASE_URL;
const api = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  //withCredentials: true,
});

export default api;
