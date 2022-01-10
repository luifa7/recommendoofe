<template>
  <!-- Page content-->
  <section class="bg-light py-3">
    <div class="container px-4 px-md-5">
      <!-- Register form-->
      <div class="py-4 px-md-5 mb-5">
        <div class="text-center mb-3">
          <h1 class="fw-bolder">
            Register <i class="bi bi-key-fill" style="color: orange"></i>
          </h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <form id="add-user-form" @submit.prevent="newUser">
              <!-- Username input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="username"
                  type="text"
                  placeholder="Enter your username..."
                  v-model="username"
                  required
                  style="text-transform: lowercase"
                />
                <label for="username">Username</label>
                <div class="invalid-feedback">Your username is required.</div>
              </div>
              <!-- FullName input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="fullname"
                  type="text"
                  placeholder="Enter your name..."
                  v-model="fullName"
                />
                <label for="name">Name</label>
              </div>
              <!-- Short Fact 1 input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="short-fact-1"
                  type="text"
                  placeholder="Enter a small fact about you..."
                  v-model="shortFact1"
                  required
                />
                <label for="shortFact1">Short Fact 1</label>
                <div class="invalid-feedback">
                  Small facts about you are required.
                </div>
              </div>
              <!-- Short Fact 2 input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="short-fact-2"
                  type="text"
                  placeholder="Enter a small fact about you..."
                  v-model="shortFact2"
                  required
                />
                <label for="shortFact2">Short Fact 2</label>
                <div class="invalid-feedback">
                  Small facts about you are required.
                </div>
              </div>
              <!-- Short Fact 3 input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="short-fact-3"
                  type="text"
                  placeholder="Enter a small fact about you..."
                  v-model="shortFact3"
                  required
                />
                <label for="shortFact3">Short Fact 3</label>
                <div class="invalid-feedback">
                  Small facts about you are required.
                </div>
              </div>
              <!-- About me input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="about-me"
                  type="text"
                  placeholder="Enter something about you here..."
                  style="height: 10rem"
                  v-model="aboutMe"
                ></textarea>
                <label for="aboutMe">About me</label>
              </div>
              <!-- Interested in input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="interested-in"
                  type="text"
                  placeholder="Enter your interests here..."
                  style="height: 10rem"
                  v-model="interestedIn"
                ></textarea>
                <label for="interestedIn">Interested in</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="photo"
                  type="text"
                  placeholder="Add your profile photo..."
                  v-model="photo"
                  required
                />
                <label for="photo">Profile picture</label>
                <div class="invalid-feedback">You need a profile picture.</div>
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
              <!-- Repeat Password input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="password-repeat"
                  type="password"
                  placeholder="Repeat your password..."
                  v-model="passwordRepeat"
                  required
                />
                <label for="password">Repeat password</label>
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
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { createUser, getUserByUsername } from "@/services/userService";
import { useStore } from "vuex";
import { CreateUser, User } from "@/store/types/types";
import {
  allowOrRedirectToProfile,
  redirectToUserProfile,
} from "@/services/authService";

allowOrRedirectToProfile();
const store = useStore();
const username = ref("");
const fullName = ref("");
const shortFact1 = ref("");
const shortFact2 = ref("");
const shortFact3 = ref("");
const aboutMe = ref("");
const interestedIn = ref("");
const photo = ref("");
const password = ref("");
const passwordRepeat = ref("");

async function newUser() {
  const user: Array<User> = await getUserByUsername(
    username.value.toLowerCase()
  );
  if (user.length === 0) {
    const newUser: CreateUser = {
      userName: username.value.toLowerCase(),
      name: fullName.value,
      shortFact1: shortFact1.value,
      shortFact2: shortFact2.value,
      shortFact3: shortFact3.value,
      aboutMe: aboutMe.value,
      interestedIn: interestedIn.value,
      photo: photo.value,
    };
    const response = await createUser(newUser);
    if (!response) {
      console.log("Error: No Response on Create City");
    } else if (response.status !== 201) {
      console.log(response.statusText);
    } else {
      const createdUser: User = response.data as User;
      store.commit("loginUser", createdUser);
      redirectToUserProfile(createdUser.dId);
    }
  } else {
    console.log("User Name Already Exist");
  }
}
</script>
