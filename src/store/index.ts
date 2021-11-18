import axios from "../axios/index";
import router from "../router/index";
import { createStore } from "vuex";
import {
  RegisterParams,
  TokenResponse,
  LoginParams,
  UserData,
  Posts,
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
    } as UserData,
    validRefreshToken: true,
    posts: [] as Array<Posts>,
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
    setUser(state, userData: UserData) {
      state.user = userData;
    },
    setPosts(state, posts: Array<Posts>) {
      state.posts = posts;
    },
  },
  actions: {
    async getToken({ commit }) {
      try {
        const response = await axios.get<TokenResponse>("/auth/token");
        const token = response.data.token;
        commit("setToken", token);
        commit("setAuthStatus", true);
        return true;
      } catch (err) {
        commit("setAuthStatus", false);
        return false;
      }
    },
    async register({ commit }, params: RegisterParams) {
      const response = await userService.register(params);
      const token = response.data.token;
      commit("setToken", token);
      commit("setAuthStatus", true);
      router.push("Home");
    },
    async login({ commit }, params: LoginParams) {
      const response = await userService.login(params);
      const token = response.data.token;
      commit("setToken", token);
      commit("setAuthStatus", true);
      router.push("Home");
    },
    async logout({ commit }) {
      userService.deleteSecondaryRefreshToken();
      await userService.logout().catch(()=>console.log("failed"));
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
