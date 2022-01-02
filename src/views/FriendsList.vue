<template>
  <!-- Friends section-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="fw-bolder">Your contacts</h2>
        <p class="lead fw-normal text-muted mb-5">
          People connected with your living idea
        </p>
      </div>
      <div
        class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"
      >
        <div
          v-for="friend in friends"
          class="col mb-5 mb-5 mb-xl-0"
          :key="friend.dId"
        >
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
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";

export default defineComponent({
  setup() {
    allowOrRedirectToHome();
    const store = useStore();
    const user = ref();
    const userDId: string = getUserDIdFromRoute();
    const friends = ref();

    (async () => {
      if (store.getters.getLoggedUser.dId !== userDId) {
        user.value = await getUserByDId(userDId);
        friends.value = await getFriendsByUserDId(userDId);
      } else {
        user.value = store.getters.getLoggedUser;
        friends.value = store.getters.getLoggedUserFriends;
      }
    })();

    return { user, friends };
  },
});
</script>
