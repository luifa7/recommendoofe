<template>
  <!-- Friends section-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h1 class="fw-bolder">
          Find Friends to Add
          <i class="bi bi-person-plus-fill" style="color: orange"></i>
        </h1>
        <p class="lead fw-normal text-muted mb-5">
          Expand your network. Increase your experiences.
        </p>
      </div>
      <div
        class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
      >
        <div v-for="user in users" :key="user.dId">
          <friend-card :friend="user" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { allowOrRedirectToHome } from "@/services/authService";
import { getAllUsers } from "@/services/userService";
import FriendCard from "@/components/FriendCard.vue";

export default defineComponent({
  components: { FriendCard },
  setup() {
    allowOrRedirectToHome();
    const users = ref();

    (async () => {
      users.value = await getAllUsers();
    })();

    return { users };
  },
});
</script>
