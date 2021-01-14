import axios from "../axios/index";
import { createStore } from "vuex";
import { registerParams, tokenResponse, loginParams } from "../types/index";
import userService from "../auth/userService";
export default createStore({
  state: {
    token: "",
    authStatus: false,
    user: {},
    validRefreshToken: true,
  },
  getters: {
    isAuthenticated: (state) => state.authStatus,
    validRefreshToken: (state) => state.validRefreshToken,
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token;
    },
    setValidRefreshToken(state, valid: boolean) {
      state.validRefreshToken = valid;
    },
    setAuthStatus(state, isAuth: boolean) {
      state.authStatus = isAuth;
    },
  },
  actions: {
    async getToken({ commit }) {
      try {
        const response = await axios.get<tokenResponse>("/auth/token");
        const token = response.data.token;
        commit("setToken", token);
        commit("setAuthStatus", true);
      } catch (err) {
        if (err.response) {
          console.error(err.response);
        } else if (err.request) {
          console.error(err.request);
        }
      }
    },
    async register({ commit }, params: registerParams) {
      try {
        const response = await userService.register(params);
        const token = response.data.token;
        commit("setToken", token);
        commit("setAuthStatus", true);
      } catch (err) {
        alert(err);
      }
    },
    async login({ commit }, params: loginParams) {
      const response = await userService.login(params);
      const token = response.data.token;
      commit("setToken", token);
      commit("setAuthStatus", true);
    },
  },
  modules: {},
});