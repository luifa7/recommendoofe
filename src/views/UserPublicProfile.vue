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
        <h1 class="masthead-heading logo-font">{{ user.name }}</h1>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading fw-bold mb-3">
          {{ user.shortFact1 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact2 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact3 }}
        </p>
        <div class="d-flex">
          <router-link
            class="btn btn-primary btn-lg px-3 my-2 me-2"
            style="font-size: 2rem"
            :to="{
              name: 'CitiesToVisit',
            }"
            ><i class="bi bi-journal-bookmark"></i
          ></router-link>
          <router-link
            class="btn btn-success btn-lg px-3 my-2 me-2"
            style="font-size: 2rem"
            :to="{
              name: 'CitiesVisited',
            }"
            ><i class="bi bi-journal-check"></i
          ></router-link>
          <div
            v-if="showAddFriendButton"
            class="btn btn-outline-light btn-lg px-3 my-2"
            style="font-size: 2rem"
            @click="sendFriendRequest"
          >
            <i class="bi bi-person-plus"></i>
          </div>
          <div
            v-if="showRequestAlreadySent"
            class="btn-secondary btn-lg px-3 my-2"
            style="font-size: 2rem"
          >
            <i class="bi bi-clock-history"></i>
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
              <h2 class="text-center fw-bolder logo-font">
                Interested in <i class="bi bi-hand-thumbs-up-fill"></i>
              </h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
              </div>
              <div class="fs-4 mb-4 fst-italic">
                {{ user.interestedIn }}
              </div>
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
              <h2 class="text-center fw-bolder logo-font">
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
import { Ref, ref } from "vue";
import {
  getUserByDId,
  isFriendRequestPending,
  postFriendRequest,
} from "@/services/userService";
import { pushHome } from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import { getUserDIdFromRoute, isThisUserMyFriend } from "./helpers";
import { FriendRequest, User } from "@/store/types/types";

const userStore = useUserStore();
const user: Ref<User | undefined> = ref();
const showAddFriendButton: Ref<boolean> = ref(false);
const showRequestAlreadySent: Ref<boolean> = ref(false);
const userDId: string = getUserDIdFromRoute();
const loggedInUser: User | undefined = userStore.loggedInUser;
const loggedUserFriends: Array<User> = userStore.userFriends;
if (!loggedInUser) {
  pushHome;
} else {
  (async () => {
    if (loggedInUser.dId !== userDId) {
      user.value = await getUserByDId(userDId);
      showAddFriendButton.value = !isThisUserMyFriend(
        userDId,
        loggedUserFriends
      );
      if (showAddFriendButton.value) {
        const isPending = await isFriendRequestPending(
          loggedInUser.dId,
          userDId
        );
        if (isPending) {
          showAddFriendButton.value = false;
          showRequestAlreadySent.value = true;
        }
      }
    } else {
      user.value = loggedInUser;
    }
  })();
}

async function sendFriendRequest() {
  if (loggedInUser) {
    const friendRequest: FriendRequest = {
      friendDId: userDId,
    };
    const response = await postFriendRequest(loggedInUser.dId, friendRequest);
    if (!response) {
      console.log("Error: No Response on Send Friend Request");
    } else if (response.status !== 201) {
      console.log(response.statusText);
    } else {
      showAddFriendButton.value = false;
      showRequestAlreadySent.value = true;
    }
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
