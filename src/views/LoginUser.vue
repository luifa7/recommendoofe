<template>
  <!-- Page content-->
  <section class="bg-light py-5">
    <div class="container px-4 px-md-5">
      <!-- Login form-->
      <div class="py-5 px-md-5 mb-5">
        <div class="text-center mb-3">
          <h1 class="fw-bolder">
            Login <i class="bi bi-key-fill" style="color: orange"></i>
          </h1>
        </div>
        <div class="row gx-5 justify-content-center mb-4">
          <div class="col-lg-8 col-xl-6">
            <form id="login-form" @submit.prevent="loginUser">
              <!-- Username input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="username"
                  type="text"
                  placeholder="Enter your username..."
                  v-model="username"
                  required
                />
                <label for="username">Username</label>
                <div class="invalid-feedback">Your username is required.</div>
              </div>
              <!-- Password input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="password"
                  type="password"
                  placeholder="Enter your password..."
                  v-model="password"
                  required
                />
                <label for="password">Password</label>
                <div class="invalid-feedback">Your password is required.</div>
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
        <div class="text-center">
          <h5>
            You don't have an account?
            <router-link :to="{ name: 'RegisterUser' }" class="nav-link"
              >Register here!</router-link
            >
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  allowOrRedirectToProfile,
  redirectToUserProfile,
} from "@/services/authService";
import { useStore } from "vuex";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";
import { User } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";

allowOrRedirectToProfile();
const store = useStore();
const username = ref("");
const password = ref("");

async function loginUser() {
  // const myUserDId = "549e021d-4c4a-4953-93d1-78538be728da";
  const myUserDId = "827f4e3f-687d-46f0-8e55-042da9ba8f19";
  const user: User | undefined = await getUserByDId(myUserDId);
  if (user) {
    store.commit("loginUser", user);
    const friends = await getFriendsByUserDId(myUserDId);
    store.commit("setLoggedUserFriends", friends);
    const cities = await getCitiesByUserDId(myUserDId);
    store.commit("setLoggedUserCities", cities);
    redirectToUserProfile(user.dId);
  }
}
</script>