<template>
  <!-- Page content-->
  <section class="py-5">
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
              <div
                class="alert alert-danger"
                role="alert"
                style="text-align: center"
                v-if="showError"
              >
                {{ showError }}
              </div>
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
import { Ref, ref } from "vue";
import {
  allowOrRedirectToProfile,
  redirectToUserProfile,
} from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";
import { User } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";
import { moveUp } from "./helpers";

allowOrRedirectToProfile();
const userStore = useUserStore();
const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const showError: Ref<string> = ref("");

async function loginUser() {
  // const myUserDId = "19b998f3-3483-489c-8b5a-73ca189dbd7e";
  const myUserDId = "3fb454fc-5547-4734-8323-5f5bcbd9db72";
  // const myUserDId = "3db99fe8-caf1-409c-bd02-323c63b4a4fd";
  const user: User | undefined = await getUserByDId(myUserDId);
  if (user) {
    userStore.loginUser(user);
    const friends = await getFriendsByUserDId(myUserDId);
    userStore.setLoggedUserFriends(friends);
    const cities = await getCitiesByUserDId(myUserDId);
    userStore.setLoggedUserCities(cities);
    redirectToUserProfile(user.dId);
  } else {
    showError.value = "Wrong password or username :/";
    console.log("Wrong password or username");
    moveUp();
  }
}
</script>
