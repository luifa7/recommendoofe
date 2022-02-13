import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { City, User } from "./types/types";

export const useUserStore = defineStore("user", () => {
  const loggedInUser: Ref<User | undefined> = ref();
  const userFriends: Ref<Array<User>> = ref([]);
  const userCities: Ref<Array<City>> = ref([]);
  const unreadNotifications: Ref<number> = ref(0);

  function loginUser(user: User) {
    loggedInUser.value = user;
  }
  function logoutUser() {
    userFriends.value = [];
    userCities.value = [];
    unreadNotifications.value = 0;
    loggedInUser.value = undefined;
  }
  function setLoggedUserFriends(friends: Array<User>) {
    userFriends.value = friends;
  }
  function setLoggedUserCities(cities: Array<City>) {
    userCities.value = cities;
  }
  function setUnreadNotifications(unreadNotificationsCount: number) {
    unreadNotifications.value = unreadNotificationsCount;
  }

  return {
    loggedInUser,
    userFriends,
    userCities,
    loginUser,
    logoutUser,
    unreadNotifications,
    setLoggedUserFriends,
    setLoggedUserCities,
    setUnreadNotifications,
  };
});
