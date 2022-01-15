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
      <ul
        class="nav nav-pills mb-5 justify-content-center"
        id="pills-tab"
        role="tablist"
        style="font-size: 2rem"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border border-warning px-4 active"
            id="pills-search-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-search"
            type="button"
            role="tab"
            aria-controls="pills-search"
            aria-selected="true"
          >
            <i class="bi bi-search"></i>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border border-warning px-4"
            id="pills-received-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-received"
            type="button"
            role="tab"
            aria-controls="pills-received"
            aria-selected="false"
          >
            <i class="bi bi-envelope-plus"></i>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link border border-warning px-4"
            id="pills-sent-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-sent"
            type="button"
            role="tab"
            aria-controls="pills-sent"
            aria-selected="false"
          >
            <i class="bi bi-send-plus"></i>
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-search"
          role="tabpanel"
          aria-labelledby="pills-search-tab"
        >
          <search-friend />
        </div>
        <div
          class="tab-pane fade"
          id="pills-received"
          role="tabpanel"
          aria-labelledby="pills-received-tab"
        >
          <h2 class="my-4" style="text-align: center">
            Received friend requests
          </h2>
          <div
            class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
          >
            <div v-for="friend in receivedFriendRequests" :key="friend.dId">
              <div class="col mb-5 mb-5 mb-xl-0">
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
                    <button
                      type="button"
                      class="btn btn-success mx-3 px-4"
                      @click="acceptRequest(friend.dId)"
                    >
                      <i class="bi bi-check-square"></i>
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger mx-3 px-4"
                      @click="deleteRequest(friend.dId, true)"
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-sent"
          role="tabpanel"
          aria-labelledby="pills-sent-tab"
        >
          <h2 class="my-4" style="text-align: center">Sent friend requests</h2>
          <div
            class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
          >
            <div v-for="friend in sentFriendRequests" :key="friend.dId">
              <div class="col mb-5 mb-5 mb-xl-0">
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
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="deleteRequest(friend.dId, false)"
                    >
                      Cancel <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { allowOrRedirectToHome } from "@/services/authService";
import SearchFriend from "@/components/SearchFriend.vue";
import { ref, computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import {
  acceptFriendRequest,
  deleteFriendRequest,
  getFriendsByUserDId,
  getReceivedFriendRequestsByUserDId,
  getSentFriendRequestsByUserDId,
} from "@/services/userService";
import { FriendRequest, User } from "@/store/types/types";

allowOrRedirectToHome();
const store = useStore();
const receivedFriendRequests = ref();
const sentFriendRequests = ref();
const loggedInUser: ComputedRef<User> = computed(
  () => store.getters.getLoggedUser
);

(async () => {
  receivedFriendRequests.value = await getReceivedFriendRequestsByUserDId(
    loggedInUser.value.dId
  );
  sentFriendRequests.value = await getSentFriendRequestsByUserDId(
    loggedInUser.value.dId
  );
})();

async function acceptRequest(friendDId: string) {
  const friendRequest: FriendRequest = {
    userDId: loggedInUser.value.dId,
    friendDId: friendDId,
  };
  const response = await acceptFriendRequest(friendRequest);
  if (!response) {
    console.log("Error: No Response on Accept Friend Request");
  } else if (response.status !== 200) {
    console.log(response.statusText);
  } else {
    receivedFriendRequests.value = await getReceivedFriendRequestsByUserDId(
      loggedInUser.value.dId
    );
    const friends = await getFriendsByUserDId(loggedInUser.value.dId);
    store.commit("setLoggedUserFriends", friends);
  }
}

async function deleteRequest(friendDId: string, isReceived: boolean) {
  const friendRequest: FriendRequest = {
    userDId: loggedInUser.value.dId,
    friendDId: friendDId,
  };
  const response = await deleteFriendRequest(friendRequest);
  if (!response) {
    console.log("Error: No Response on Reject Friend Request");
  } else if (response.status !== 204) {
    console.log(response.statusText);
  } else {
    if (isReceived) {
      receivedFriendRequests.value = await getReceivedFriendRequestsByUserDId(
        loggedInUser.value.dId
      );
    } else {
      sentFriendRequests.value = await getSentFriendRequestsByUserDId(
        loggedInUser.value.dId
      );
    }
  }
}
</script>

<style scoped>
.nav-link {
  font-weight: bold;
  color: black;
  margin-inline-end: 1rem;
}
.nav-link.active {
  background-color: orange;
}
</style>
