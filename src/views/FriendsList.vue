<template>
  <!-- Friends section-->
  <section class="py-3">
    <div class="container px-5 my-4">
      <div class="text-center">
        <h1 class="logo-font">
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
import { Ref, ref } from "vue";
import { getUserDIdFromRoute } from "./helpers";
import { pushHome } from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";
import FriendCard from "@/components/FriendCard.vue";
import { User } from "@/store/types/types";

const userStore = useUserStore();
const loggedInUser: User | undefined = userStore.loggedInUser;
const user: Ref<User | undefined> = ref();
const userDId: string = getUserDIdFromRoute();
const friends: Ref<Array<User>> = ref([]);
const loggedUserFriends: Array<User> = userStore.userFriends;

if (!loggedInUser) {
  pushHome;
} else {
  (async () => {
    if (loggedInUser.dId !== userDId) {
      user.value = await getUserByDId(userDId);
      friends.value = await getFriendsByUserDId(userDId);
    } else {
      user.value = loggedInUser;
      friends.value = loggedUserFriends;
    }
  })();
}
</script>
