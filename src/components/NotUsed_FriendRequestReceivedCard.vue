<template>
  <div v-if="friend" class="col mb-5 mb-5 mb-xl-0">
    <div class="text-center">
      <router-link
        :to="{
          name: 'UserPublicProfile',
          params: {
            userdid: friend.dId,
          },
        }"
        class="nav-link"
      >
        <img
          class="img-fluid rounded-3 img-same-size mb-4"
          :src="friend.photo"
          alt="..."
        />
        <h5 class="fw-bolder">{{ friend.name }}</h5>
      </router-link>
      <div>
        <button type="button" class="btn btn-success mx-3 px-4">
          <i class="bi bi-check-square"></i>
        </button>
        <button
          type="button"
          class="btn btn-danger mx-3 px-4"
          @click="deleteRequest"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deleteFriendRequest } from "@/services/userService";
import { FriendRequest, User } from "@/store/types/types";
import { computed, ComputedRef } from "vue";
import { useUserStore } from "@/store/userStore";

const props = defineProps<{ friend: User }>();
const userStore = useUserStore();
const loggedInUser: User | undefined = userStore.loggedInUser;

async function deleteRequest() {
  if (loggedInUser) {
    const friendRequest: FriendRequest = {
      userDId: loggedInUser.dId,
      friendDId: props.friend.dId,
    };
    const response = await deleteFriendRequest(friendRequest);
    if (!response) {
      console.log("Error: No Response on Send Friend Request");
    } else if (response.status !== 204) {
      console.log(response.statusText);
    }
  }
}
</script>
