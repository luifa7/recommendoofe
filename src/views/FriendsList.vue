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
          <button
            v-if="canDelete"
            type="button"
            class="btn btn-danger mb-4 mx-2"
            @click="deleteFr(friend.dId)"
          >
            <i class="bi bi-trash"></i> Remove
          </button>
        </div>
        <h4 v-if="friends.length == 0" class="logo-font text-center">
          Still no friends
        </h4>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, Ref, ref } from "vue";
import { getUserDIdFromRoute } from "./helpers";
import { pushHome } from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import {
  deleteFriendRequest,
  getFriendsByUserDId,
  getUserByDId,
} from "@/services/userService";
import FriendCard from "@/components/FriendCard.vue";
import { FriendRequest, User } from "@/store/types/types";

const userStore = useUserStore();
const loggedInUser: User | undefined = userStore.loggedInUser;
const user: Ref<User | undefined> = ref();
const userDId: string = getUserDIdFromRoute();
const friends: Ref<Array<User>> = ref([]);
const loggedUserFriends: Array<User> = userStore.userFriends;
const canDelete: ComputedRef<boolean> = computed(
  () => userStore.loggedInUser?.dId === userDId
);

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

async function deleteFr(friendDId: string) {
  if (loggedInUser) {
    const friendRequest: FriendRequest = {
      userDId: loggedInUser.dId,
      friendDId: friendDId,
    };
    const response = await deleteFriendRequest(friendRequest);
    if (!response) {
      console.log("Error: No Response on Delete Friend");
    } else if (response.status !== 204) {
      console.log(response.statusText);
    } else {
      const updatedFriends = await getFriendsByUserDId(loggedInUser.dId);
      userStore.setLoggedUserFriends(updatedFriends);
      friends.value = userStore.userFriends;
    }
  }
}
</script>
