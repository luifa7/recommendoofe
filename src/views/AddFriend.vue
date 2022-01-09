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
      <div class="row gx-5 justify-content-center mb-4">
        <div class="col-lg-8 col-xl-6">
          <form id="search-form" @submit.prevent="searchUser">
            <!-- Search input-->
            <div class="form-floating mb-3">
              <input
                class="form-control"
                id="username"
                type="text"
                placeholder="Username to find..."
                v-model="username"
                required
              />
              <label for="username">Search by username</label>
            </div>
            <!-- Submit Button-->
            <div class="d-grid">
              <button
                class="btn btn-primary btn-lg"
                id="submitButton"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
import { getUserByUsername } from "@/services/userService";
import FriendCard from "@/components/FriendCard.vue";

export default defineComponent({
  components: { FriendCard },
  setup() {
    allowOrRedirectToHome();
    const users = ref();
    const username = ref("");

    async function searchUser() {
      if (username.value) {
        users.value = await getUserByUsername(username.value.toLowerCase());
      }
    }

    return { username, users, searchUser };
  },
});
</script>
