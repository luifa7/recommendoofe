import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { City, User } from "./types/types";

export interface State {
  loggedInUser: User | undefined;
  userFriends: Array<User>;
  userCities: Array<City>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loggedInUser: undefined,
    userFriends: [],
    userCities: [],
  },
  mutations: {
    loginUser(state, user: User) {
      state.loggedInUser = user;
    },
    logoutUser(state) {
      state.userFriends = [];
      state.userCities = [];
      state.loggedInUser = undefined;
    },
    setLoggedUserFriends(state, userFriends: Array<User>) {
      state.userFriends = userFriends;
    },
    setLoggedUserCities(state, userCities: Array<City>) {
      state.userCities = userCities;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getLoggedUser: (state) => {
      return state.loggedInUser;
    },
    getLoggedUserFriends: (state) => {
      return state.userFriends;
    },
    getLoggedUserCities: (state) => {
      return state.userCities;
    },
  },
});
