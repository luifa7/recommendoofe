<template>
  <!-- Friends section-->
  <section class="py-3">
    <div class="container px-5 my-4">
      <div class="text-center">
        <h1 class="logo-font">
          Find friends to add
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
            <div style="position: relative">
              <i class="bi bi-envelope-plus"></i>
              <span class="badge badge-danger badge-counter">{{
                pendingRequestText
              }}</span>
            </div>
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
          <h3 class="my-4 logo-font" style="text-align: center">
            Received friend requests
          </h3>
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
                    <h5 class="logo-font">{{ friend.name }}</h5>
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
          <h3 class="my-4 logo-font" style="text-align: center">
            Sent friend requests
          </h3>
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
                    <h5 class="logo-font">{{ friend.name }}</h5>
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
import { pushHome } from "@/services/authService";
import SearchFriend from "@/components/SearchFriend.vue";
import { Ref, ref } from "vue";
import { useUserStore } from "@/store/userStore";
import {
  acceptFriendRequest,
  deleteFriendRequest,
  getFriendsByUserDId,
  getReceivedFriendRequestsByUserDId,
  getSentFriendRequestsByUserDId,
} from "@/services/userService";
import { FriendRequest, User } from "@/store/types/types";

const userStore = useUserStore();
const receivedFriendRequests: Ref<Array<User>> = ref([]);
const sentFriendRequests: Ref<Array<User>> = ref([]);
const loggedInUser: User | undefined = userStore.loggedInUser;
const pendingRequestText: Ref<string> = ref("");

function setPendingSizeText() {
  if (receivedFriendRequests.value.length > 9) {
    pendingRequestText.value = receivedFriendRequests.value.length + "+";
  } else if (receivedFriendRequests.value.length > 0) {
    pendingRequestText.value = receivedFriendRequests.value.length + "";
  } else {
    pendingRequestText.value = "";
  }
}

if (!loggedInUser) {
  pushHome;
} else {
  (async () => {
    receivedFriendRequests.value = await getReceivedFriendRequestsByUserDId(
      loggedInUser.dId
    );
    setPendingSizeText();
    sentFriendRequests.value = await getSentFriendRequestsByUserDId(
      loggedInUser.dId
    );
  })();
}

async function acceptRequest(friendDId: string) {
  if (loggedInUser) {
    const friendRequest: FriendRequest = {
      userDId: loggedInUser.dId,
      friendDId: friendDId,
    };
    const response = await acceptFriendRequest(friendRequest);
    if (!response) {
      console.log("Error: No Response on Accept Friend Request");
    } else if (response.status !== 200) {
      console.log(response.statusText);
    } else {
      receivedFriendRequests.value = await getReceivedFriendRequestsByUserDId(
        loggedInUser.dId
      );
      setPendingSizeText();
      const friends = await getFriendsByUserDId(loggedInUser.dId);
      userStore.setLoggedUserFriends(friends);
    }
  }
}

async function deleteRequest(friendDId: string, isReceived: boolean) {
  if (loggedInUser) {
    const friendRequest: FriendRequest = {
      userDId: loggedInUser.dId,
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
          loggedInUser.dId
        );
        setPendingSizeText();
      } else {
        sentFriendRequests.value = await getSentFriendRequestsByUserDId(
          loggedInUser.dId
        );
      }
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

.badge {
  border: 1px solid #000;
}

.badge-counter {
  position: absolute;
  transform: scale(0.5);
  transform-origin: top right;
  right: -1.2rem;
  margin-top: -1.2rem;
  color: black;
}

.badge-danger {
  color: #fff;
  background-color: #e74a3b;
}
</style>
