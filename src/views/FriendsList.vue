<template>
  <!-- Friends section-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h1 class="fw-bolder">
          <span>Friends </span>
          <router-link
            :to="{
              name: 'AddFriend',
            }"
          >
            <i class="bi bi-plus-square-fill" style="color: orange"></i>
          </router-link>
        </h1>
        <p class="lead fw-normal text-muted mb-5">
          People connected with your living idea
        </p>
      </div>
      <div
        class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
      >
        <div v-for="friend in friends" :key="friend.dId">
          <friend-card :friend="friend" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";
import FriendCard from "@/components/FriendCard.vue";

allowOrRedirectToHome();
const store = useStore();
const user = ref();
const userDId: string = getUserDIdFromRoute();
const friends = ref();

(async () => {
  if (store.getters.getLoggedUser.dId !== userDId) {
    user.value = await getUserByDId(userDId);
    friends.value = await getFriendsByUserDId(userDId);
  } else {
    user.value = store.getters.getLoggedUser;
    friends.value = store.getters.getLoggedUserFriends;
  }
})();
</script>
