import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { User } from "./types/types";

export interface State {
  loggedInUser: User | undefined;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    loggedInUser: undefined,
  },
  mutations: {
    loginUser(state, user: User) {
      state.loggedInUser = user;
    },
    logoutUser(state) {
      state.loggedInUser = undefined;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getLoggedUser: (state) => {
      return state.loggedInUser;
    },
  },
});
