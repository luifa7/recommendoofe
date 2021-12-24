<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <router-link :to="{ name: 'Home' }" class="navbar-brand" id="name-logo"
        ><img
          src="./assets/logo-2.png"
          class="center"
          style="height: 3rem; width: 3rem"
        />Recommendoo</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- User is logged -->
        <ul v-if="actualUser" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{
                name: 'UserPublicProfile',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              >My Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'UserContacts',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              >Your Contacts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'CitiesPlanned',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              >To Visit</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'CitiesVisited',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              >Visited</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Logout' }" class="nav-link"
              >Logout</router-link
            >
          </li>
        </ul>
        <!-- No user logged -->
        <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Register' }" class="nav-link"
              >Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="nav-link"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      actualUser: computed(() => store.getters.getLoggedUser),
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#name-logo {
  font-family: "Shrikhand", cursive;
  color: orange;
  font-size: xx-large;
}
</style>
