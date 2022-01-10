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
        <div class="fst-italic text-muted">
          <i class="bi bi-star"></i> {{ friend.shortFact1 }}<br />
          <i class="bi bi-star"></i> {{ friend.shortFact2 }}<br />
          <i class="bi bi-star"></i> {{ friend.shortFact3 }}
        </div>
      </div></router-link
    >
  </div>
</template>

<script lang="ts" setup>
import { User } from "@/store/types/types";

const props = defineProps<{ friend: User }>();
</script>
