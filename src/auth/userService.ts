import axios from '../axios/index';
import { LoginParams, TokenResponse, UserData } from '../types/index';
import { RegisterParams } from '../types/index';

function deleteSecondaryRefreshToken() {
  document.cookie =
    'secondaryRefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function register(params: RegisterParams) {
  return axios.post<TokenResponse>('/auth/register', params);
}
function login(params: LoginParams) {
  return axios.post<TokenResponse>('/auth/login', params);
}
function logout() {
  return axios.get<TokenResponse>('/auth/logout', {
    withCredentials: true
  });
}
function getUserInfo() {
  return axios.get<UserData>('/auth/userinfo');
}

export default {
  register,
  login,
  logout,
  getUserInfo,
  deleteSecondaryRefreshToken
};
