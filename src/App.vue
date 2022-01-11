<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container px-3" style="text-align: right">
      <router-link
        :to="{ name: 'Home' }"
        class="navbar-brand logo-font"
        id="name-logo"
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
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="margin-right: 0.7rem"
      >
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
              ><i class="bi bi-person"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'UserFriends',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              ><i class="bi bi-people"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'AddFriend',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              ><i class="bi bi-person-plus"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'CitiesToVisit',
                params: {
                  userdid: actualUser.dId,
                },
              }"
              class="nav-link"
              ><i class="bi bi-journal-bookmark"></i
            ></router-link>
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
              ><i class="bi bi-journal-check"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'LogoutUser' }" class="nav-link"
              ><i class="bi bi-power"></i
            ></router-link>
          </li>
        </ul>
        <!-- No user logged -->
        <ul v-else class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link"
              ><i class="bi bi-house-door"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link"
              ><i class="bi bi-info-square"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'LoginUser' }" class="nav-link"
              ><i class="bi bi-key"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const actualUser = computed(() => store.getters.getLoggedUser);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#name-logo {
  color: orange;
  font-size: 1.5rem;
}
#navbarSupportedContent {
  font-size: 2rem;
}
.logo-font {
  font-family: "Shrikhand", cursive;
}
</style>
