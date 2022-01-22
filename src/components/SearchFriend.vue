<template>
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
            style="text-transform: lowercase"
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
            Search
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
    <h4 v-if="noUserFound" class="logo-font text-center">No user found</h4>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watch } from "vue";
import FriendCard from "@/components/FriendCard.vue";
import { getUserByUsername } from "@/services/userService";
import { User } from "@/store/types/types";

const users: Ref<Array<User>> = ref([]);
const username: Ref<string> = ref("");
const noUserFound: Ref<boolean> = ref(false);

async function searchUser() {
  if (username.value) {
    users.value = await getUserByUsername(username.value.toLowerCase());
    noUserFound.value = users.value.length == 0;
  }
}
watch(
  () => username.value,
  (newValue) => {
    if (newValue.length == 0) {
      noUserFound.value = false;
    }
  }
);
</script>
