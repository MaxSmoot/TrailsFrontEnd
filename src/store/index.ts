import axios from "../axios/index";
import router from "../router/index";
import { createStore } from "vuex";
import {
  registerParams,
  tokenResponse,
  loginParams,
  userData,
  posts,
} from "../types/index";
import userService from "../auth/userService";
import useLoadPosts from "@/components/LoggedInUsers/Home/compositions/use-LoadPosts";
export default createStore({
  state: {
    token: "",
    authStatus: false,
    user: {
      Username: "",
      FName: "",
      LName: "",
      Phone: "",
      Email: "",
    } as userData,
    validRefreshToken: true,
    posts: [] as Array<posts>,
  },
  getters: {
    isAuthenticated: (state) => state.authStatus,
    validRefreshToken: (state) => state.validRefreshToken,
    accessToken: (state) => state.token,
    userInfo: (state) => state.user,
    posts: (state) => state.posts,
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
    setUser(state, userData: userData) {
      state.user = userData;
    },
    setPosts(state, posts: Array<posts>) {
      state.posts = posts;
    },
  },
  actions: {
    async getToken({ commit }) {
      try {
        const response = await axios.get<tokenResponse>("/auth/token");
        const token = response.data.token;
        commit("setToken", token);
        commit("setAuthStatus", true);
        return true;
      } catch (err) {
        commit("setAuthStatus", false);
        return false;
      }
    },
    async register({ commit }, params: registerParams) {
      const response = await userService.register(params);
      const token = response.data.token;
      commit("setToken", token);
      commit("setAuthStatus", true);
      router.push("Home");
    },
    async login({ commit }, params: loginParams) {
      const response = await userService.login(params);
      const token = response.data.token;
      commit("setToken", token);
      commit("setAuthStatus", true);
      router.push("Home");
    },
    async logout({ commit }) {
      await userService.logout();
      commit("setToken", "");
      commit("setAuthStatus", false);
      router.push("/");
    },
    async getUserInfo({ commit }) {
      const userInfo = (await userService.getUserInfo()).data;
      commit("setUser", userInfo);
    },
    async getPosts({ commit }) {
      const posts = (await useLoadPosts()).data;
      commit("setPosts", posts);
    },
  },
  modules: {},
});
