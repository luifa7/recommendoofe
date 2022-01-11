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
      <ul class="nav nav-pills mb-5 nav-fill" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Search
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Requests received
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Requests sents
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <search-friend />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div v-for="friend in receivedFriendRequests" :key="friend.dId">
            <friend-card :friend="friend" />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div v-for="friend in sentFriendRequests" :key="friend.dId">
            <friend-card :friend="friend" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { allowOrRedirectToHome } from "@/services/authService";
import SearchFriend from "@/components/SearchFriend.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { getFriendsByUserDId } from "@/services/userService";

allowOrRedirectToHome();
const store = useStore();
const receivedFriendRequests = ref();
const sentFriendRequests = ref();

(async () => {
  receivedFriendRequests.value = await getFriendsByUserDId(
    store.getters.getLoggedUser.DId
  );
  sentFriendRequests.value = await getFriendsByUserDId(
    store.getters.getLoggedUser.DId
  );
})();
</script>
