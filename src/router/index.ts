import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginUser",
    component: () => import("../views/LoginUser.vue"),
  },
  {
    path: "/logout",
    name: "LogoutUser",
    component: () => import("../views/LogoutUser.vue"),
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/users/:userdid",
    name: "UserPublicProfile",
    component: () => import("../views/UserPublicProfile.vue"),
  },
  {
    path: "/users/:userdid/contacts",
    name: "UserContacts",
    component: () => import("../views/FriendsList.vue"),
  },
  {
    path: "/users/:userdid/visited/cities",
    name: "CitiesVisited",
    component: () => import("../views/CitiesVisited.vue"),
  },
  {
    path: "/users/:userdid/planned/cities",
    name: "CitiesPlanned",
    component: () => import("../views/CitiesToVisit.vue"),
  },
  {
    path: "/users/:userdid/planned/cities/new",
    name: "AddCity",
    component: () => import("../views/AddCity.vue"),
  },
  {
    path: "/users/:userdid/planned/cities/:citydid/recommendations",
    name: "RecommendationsPlanned",
    component: () => import("../views/RecommendationsList.vue"),
  },
  {
    path: "/users/:userdid/visited/cities/:citydid/recommendations",
    name: "RecommendationsVisited",
    component: () => import("../views/RecommendationsList.vue"),
  },
  {
    path: "/users/:userdid/cities/:citydid/recommendations/:recommendationdid",
    name: "SingleRecommendation",
    component: () => import("../views/RecommendationDetails.vue"),
  },
  {
    path: "/users/:userdid/cities/:citydid/recommendations/new",
    name: "AddRecommendation",
    component: () => import("../views/AddRecommendation.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
