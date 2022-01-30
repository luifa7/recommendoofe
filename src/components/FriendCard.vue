<template>
  <div v-if="friend" class="col mb-xl-0">
    <router-link
      :to="{
        name: 'UserPublicProfile',
        params: {
          userdid: friend.dId,
        },
      }"
      class="nav-link"
    >
      <div>
        <img
          class="img-fluid rounded-3 img-same-size mb-1"
          :src="friend.photo"
          alt="..."
        />
        <h5 class="logo-font mx-1">{{ friend.name }}</h5>
      </div></router-link
    >
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/store/types/types";

const props = defineProps<{ friend: User }>();
</script>
