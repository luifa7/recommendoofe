import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { City, User } from "./types/types";

export const useUserStore = defineStore("user", () => {
  const loggedInUser: Ref<User | undefined> = ref();
  const userFriends: Ref<Array<User>> = ref([]);
  const userCities: Ref<Array<City>> = ref([]);

  function loginUser(user: User) {
    loggedInUser.value = user;
  }
  function logoutUser() {
    userFriends.value = [];
    userCities.value = [];
    loggedInUser.value = undefined;
  }
  function setLoggedUserFriends(friends: Array<User>) {
    userFriends.value = friends;
  }
  function setLoggedUserCities(cities: Array<City>) {
    userCities.value = cities;
  }

  return {
    loggedInUser,
    userFriends,
    userCities,
    loginUser,
    logoutUser,
    setLoggedUserFriends,
    setLoggedUserCities,
  };
});
