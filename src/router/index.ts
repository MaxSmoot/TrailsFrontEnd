import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "../store";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "FrontPage",
    component: () => import("../views/FrontPage.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/LoggedInUsers/Home.vue"),
  },
  {
    path: "/circles",
    name: "Circles",
    component: () => import("../views/LoggedInUsers/Circles.vue"),
  },
  {
    path: "/pages",
    name: "Pages",
    component: () => import("../views/LoggedInUsers/Pages.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/LoggedInUsers/Profile.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../views/LoggedInUsers/Explore.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
/**
 * Check if user is accessing any route that is protected and checks auth first
 */
router.beforeEach(async (to, __from, next) => {
  if (to.name != "FrontPage" && !store.getters.isAuthenticated) {
    const gotToken = await store.dispatch("getToken");
    if (gotToken) {
      next(to);
    } else {
      next({ name: "FrontPage" });
    }
  } else if (to.name == "FrontPage" && store.getters.isAuthenticated) {
    next("Home");
  } else {
    next();
  }
});
export default router;
