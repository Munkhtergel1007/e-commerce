import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const config = {
  headers: { Authorization: `Bearer ${cookies.get("jwt_authorization")}` },
};

const API = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  config,
});

export default API;
