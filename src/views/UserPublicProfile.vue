<template>
  <!-- Header-->
  <div v-if="user">
    <!-- Masthead-->
    <header class="masthead bg-orange text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img
          class="masthead-avatar mb-4 rounded-3"
          :src="user.photo"
          alt="..."
        />
        <!-- Masthead Heading-->
        <h1 class="masthead-heading fw-bold mb-0">{{ user.name }}</h1>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading fw-bold mb-3">
          {{ user.shortFact1 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact2 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact3 }}
        </p>
        <div
          class="d-grid d-sm-flex justify-content-sm-center justify-content-xl-start"
        >
          <router-link
            class="btn btn-primary btn-lg px-2 my-2 me-sm-2"
            :to="{
              name: 'CitiesToVisit',
            }"
            ><i class="bi bi-journal-bookmark"></i> To visit</router-link
          >
          <router-link
            class="btn btn-success btn-lg px-2 my-2 me-sm-2"
            :to="{
              name: 'CitiesVisited',
            }"
            ><i class="bi bi-journal-check"></i> Visited</router-link
          >
          <div
            v-if="showAddFriendButton"
            class="btn btn-outline-light btn-lg my-2 px-2"
            @click="sendFriendRequest"
          >
            <i class="bi bi-person-plus"></i> Add friend
          </div>
          <div
            v-if="showRequestAlreadySent"
            class="btn-secondary btn-lg my-2 px-2"
          >
            <i class="bi bi-person-plus"></i> Friend request pending
          </div>
        </div>
      </div>
    </header>

    <!-- Recommend me something section-->
    <div class="py-1">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <h2 class="text-center text-uppercase fw-bolder">
                Interested in <i class="bi bi-hand-thumbs-up-fill"></i>
              </h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
              </div>
              <div class="fs-4 mb-4 fst-italic">
                {{ user.interestedIn }}
              </div>
              <router-link
                class="btn btn-warning btn-lg px-4 me-sm-3 text-white fw-bolder"
                :to="{
                  name: 'CitiesToVisit',
                }"
                >Recommend me something!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About section-->
    <div class="py-1 bg-light">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <h2 class="text-center text-uppercase fw-bolder">
                About me <i class="bi bi-person-lines-fill"></i>
              </h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
              </div>
              <div class="fs-4 mb-4 fst-italic">
                {{ user.aboutMe }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  getUserByDId,
  isFriendRequestPending,
  postFriendRequest,
} from "@/services/userService";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { getUserDIdFromRoute, isThisUserMyFriend } from "./helpers";
import { FriendRequest } from "@/store/types/types";

allowOrRedirectToHome();
const store = useStore();
const user = ref();
const showAddFriendButton = ref(false);
const showRequestAlreadySent = ref(false);
const userDId: string = getUserDIdFromRoute();
(async () => {
  if (store.getters.getLoggedUser.dId !== userDId) {
    user.value = await getUserByDId(userDId);
    showAddFriendButton.value = !isThisUserMyFriend(
      userDId,
      store.getters.getLoggedUserFriends
    );
    if (showAddFriendButton.value) {
      const isPending = await isFriendRequestPending(
        store.getters.getLoggedUser.dId,
        userDId
      );
      if (isPending) {
        showAddFriendButton.value = false;
        showRequestAlreadySent.value = true;
      }
    }
  } else {
    user.value = store.getters.getLoggedUser;
  }
})();

async function sendFriendRequest() {
  const friendRequest: FriendRequest = {
    userDId: store.getters.getLoggedUser.dId,
    friendDId: userDId,
  };
  const response = await postFriendRequest(friendRequest);
  if (!response) {
    console.log("Error: No Response on Send Friend Request");
  } else if (response.status !== 201) {
    console.log(response.statusText);
  } else {
    showAddFriendButton.value = false;
    showRequestAlreadySent.value = true;
  }
}
</script>

<style scoped>
.masthead {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.masthead .masthead-heading {
  font-size: 2.75rem;
  line-height: 2.75rem;
}
.masthead .masthead-subheading {
  font-size: 1.25rem;
}
.masthead .masthead-avatar {
  width: 15rem;
}

@media (min-width: 992px) {
  .masthead {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .masthead .masthead-heading {
    font-size: 4rem;
    line-height: 3.5rem;
  }
  .masthead .masthead-subheading {
    font-size: 1.5rem;
  }

  .divider-custom {
    margin: 1.25rem 0 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divider-custom .divider-custom-line {
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    background-color: #2c3e50;
    border-radius: 1rem;
    border-color: #2c3e50;
  }
  .divider-custom .divider-custom-line:first-child {
    margin-right: 1rem;
  }
  .divider-custom .divider-custom-line:last-child {
    margin-left: 1rem;
  }
  .divider-custom .divider-custom-icon {
    color: #2c3e50;
    font-size: 2rem;
  }
  .divider-custom.divider-light .divider-custom-line {
    background-color: #fff;
  }
  .divider-custom.divider-light .divider-custom-icon {
    color: #fff;
  }
}
</style>
