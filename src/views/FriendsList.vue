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
import { defineComponent } from "vue";
import { User } from "@/store/types/types";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";

export default defineComponent({
  beforeCreate() {
    allowOrRedirectToHome();
  },
  data() {
    const store = useStore();
    let user: User | undefined = store.getters.getLoggedUser;
    let friends: Array<User> = store.getters.getLoggedUserFriends;
    return { user, friends };
  },
  async mounted() {
    const userDId: string = getUserDIdFromRoute();
    if (!this.user || this.user.dId !== userDId) {
      const myUserDId = "c2f708a5-1f35-486f-aa17-97d3d084ee89";
      this.user = await getUserByDId(myUserDId);
      this.friends = await getFriendsByUserDId(myUserDId);
    }
  },
});
</script>
