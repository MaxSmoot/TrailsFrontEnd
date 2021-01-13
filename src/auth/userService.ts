import axios from "../axios/index";
import {loginParams, tokenResponse } from "../types/index";
import {registerParams } from "../types/index";

function register(params: registerParams) {
  return axios.post<tokenResponse>("/auth/register", params);
}
function login(params: loginParams){
  return axios.post<tokenResponse>("/auth/login", params);
}
export default {
  register,
  login
};
