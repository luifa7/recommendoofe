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
    path: "/users/:userdid/friends",
    name: "UserFriends",
    component: () => import("../views/FriendsList.vue"),
  },
  {
    path: "/users/:userdid/friends/new",
    name: "AddFriend",
    component: () => import("../views/AddFriend.vue"),
  },
  {
    path: "/users/:userdid/cities/visited",
    name: "CitiesVisited",
    component: () => import("../views/CitiesList.vue"),
  },
  {
    path: "/users/:userdid/cities/to-visit",
    name: "CitiesToVisit",
    component: () => import("../views/CitiesList.vue"),
  },
  {
    path: "/users/:userdid/cities/new",
    name: "AddCity",
    component: () => import("../views/AddCity.vue"),
  },
  {
    path: "/users/:userdid/cities/to-visit/:citydid/recommendations",
    name: "RecommendationsToVisit",
    component: () => import("../views/RecommendationsList.vue"),
  },
  {
    path: "/users/:userdid/cities/visited/:citydid/recommendations",
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
