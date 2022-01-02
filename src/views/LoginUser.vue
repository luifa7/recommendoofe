<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Login form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-orange bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-file-person-fill"></i>
          </div>
          <h1 class="fw-bolder">Login</h1>
        </div>
        <div class="row gx-5 justify-content-center">
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
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
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
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  allowOrRedirectToProfile,
  redirectToUserProfile,
} from "@/services/authService";
import { useStore } from "vuex";
import router from "@/router";
import { getFriendsByUserDId, getUserByDId } from "@/services/userService";
import { User } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";

export default defineComponent({
  setup() {
    allowOrRedirectToProfile();
    const store = useStore();
    const username = ref("");
    const password = ref("");

    async function loginUser() {
      const myUserDId = "c2f708a5-1f35-486f-aa17-97d3d084ee89";
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
    return {
      username,
      password,
      loginUser,
    };
  },
});
</script>
