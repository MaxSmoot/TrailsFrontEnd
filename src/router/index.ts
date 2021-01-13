import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from '../store'
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

router.beforeEach((to, from, next) => {
  if (to.name != "FrontPage" && !store.getters.isAuthenticated) {
    next({ name: "FrontPage" });
  } else if (to.name == 'FrontPage' && store.getters.isAuthenticated){
    next({name: 'Home'})
  } else{
    next();
  }
});
export default router;
