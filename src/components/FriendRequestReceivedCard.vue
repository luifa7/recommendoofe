<template>
  <div v-if="friend" class="col mb-5 mb-5 mb-xl-0">
    <router-link
      :to="{
        name: 'UserPublicProfile',
        params: {
          userdid: friend.dId,
        },
      }"
      class="nav-link"
    >
      <div class="text-center">
        <img
          class="img-fluid rounded-3 img-same-size mb-4"
          :src="friend.photo"
          alt="..."
        />
        <h5 class="fw-bolder">{{ friend.name }}</h5>
        <div>
          <button type="button" class="btn btn-success mx-3 px-4">
            <i class="bi bi-check-square"></i>
          </button>
          <button type="button" class="btn btn-danger mx-3 px-4">
            <i class="bi bi-trash"></i>
          </button>
        </div></div
    ></router-link>
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/store/types/types";

const props = defineProps<{ friend: User }>();
</script>
