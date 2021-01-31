import axios from "../axios/index";
import { loginParams, tokenResponse, userData } from "../types/index";
import { registerParams } from "../types/index";

function register(params: registerParams) {
  return axios.post<tokenResponse>("/auth/register", params);
}
function login(params: loginParams) {
  return axios.post<tokenResponse>("/auth/login", params);
}
function logout() {
  return axios.get<tokenResponse>("/auth/logout");
}
function getUserInfo() {
  return axios.get<userData>("/auth/userinfo");
}
export default {
  register,
  login,
  logout,
  getUserInfo,
};
