<template>
  <!-- Navigation-->
  <nav class="navbar nav-link-logged navbar-dark bg-dark">
    <div class="container">
      <router-link
        v-if="loggedInUser"
        :to="{ name: 'Home' }"
        class="d-sm-none"
        id="name-logo"
        ><img src="@/assets/logo-2.png" style="max-width: 4rem"
      /></router-link>
      <router-link
        v-if="loggedInUser"
        :to="{ name: 'Home' }"
        class="navbar-brand logo-font d-none d-sm-inline-block"
        id="name-logo"
        >Recommendoo</router-link
      >
      <router-link
        v-else
        :to="{ name: 'Home' }"
        class="navbar-brand logo-font"
        id="name-logo"
        >Recommendoo</router-link
      >

      <div id="navbarSupportedContent">
        <!-- User is logged -->
        <ul v-if="loggedInUser" class="nav">
          <li class="nav-item">
            <router-link
              :to="{
                name: 'UserPublicProfile',
                params: {
                  userdid: loggedInUser.dId,
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
                  userdid: loggedInUser.dId,
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
                  userdid: loggedInUser.dId,
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
                  userdid: loggedInUser.dId,
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
                  userdid: loggedInUser.dId,
                },
              }"
              class="nav-link"
              ><i class="bi bi-journal-check"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'SettingsNotifications',
              }"
              class="nav-link"
              ><i class="bi bi-envelope"
                ><div style="position: relative">
                  <span class="badge badge-danger badge-counter">{{
                    pendingRequestText
                  }}</span>
                </div></i
              ></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: 'SettingsPreferences',
              }"
              class="nav-link"
              ><i class="bi bi-sliders"></i
            ></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'LogoutUser' }" class="nav-link"
              ><i class="bi bi-power"></i
            ></router-link>
          </li>
        </ul>
        <!-- No user logged -->
        <ul v-else class="nav justify-content-end">
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
import { useUserStore } from "@/store/userStore";
import { User } from "@/store/types/types";
import { computed, ComputedRef, ref, Ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import { getNewNotificationsCount } from "./services/notificationService";

const userStore = useUserStore();
const loggedInUser: ComputedRef<User | undefined> = computed(
  () => userStore.loggedInUser
);
const pendingRequestText: ComputedRef<string> = computed(() => {
  if (userStore.unreadNotifications > 9) {
    return "9+";
  } else if (userStore.unreadNotifications > 0) {
    return userStore.unreadNotifications + "";
  } else {
    return "";
  }
});

const router = useRouter();

router.afterEach(async (to, from) => {
  if (userStore.loggedInUser) {
    userStore.setUnreadNotifications(await getNewNotificationsCount());
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#name-logo {
  color: orange;
  font-size: 1rem;
}
#navbarSupportedContent {
  font-size: 1.6rem;
}
.logo-font {
  font-family: "Shrikhand", cursive;
}
.nav-link-logged .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.nav-link-logged .nav-link:hover,
.nav-link-logged .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.badge {
  border: 1px solid #000;
}

.badge-counter {
  position: absolute;
  transform: scale(0.5);
  transform-origin: top right;
  right: -0.4rem;
  margin-top: -1.2rem;
  color: black;
}

.badge-danger {
  color: #fff;
  background-color: #e74a3b;
}
</style>
