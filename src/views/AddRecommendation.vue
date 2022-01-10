<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Add Recommendation form-->
      <div v-if="city" class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-orange bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-bookmark-plus-fill"></i>
          </div>
          <h1 class="fw-bolder">Add new recommendation</h1>
          <p class="lead fw-bold mb-0">
            for {{ city.name }}, {{ city.country }}
          </p>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <form
              id="add-recommendation-form"
              @submit.prevent="addRecommendation"
            >
              <div
                class="alert alert-success"
                role="alert"
                style="text-align: center"
                v-if="showSuccess"
              >
                {{ showSuccess }}
              </div>
              <div
                class="alert alert-danger"
                role="alert"
                style="text-align: center"
                v-if="showError"
              >
                {{ showError }}
              </div>
              <!-- Place name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="place-name"
                  type="text"
                  placeholder="Enter the name of the place..."
                  v-model="placeName"
                  required
                />
                <label for="place-name">Name of the place</label>
              </div>
              <!-- Title input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter the title..."
                  v-model="title"
                  required
                />
                <label for="title">Title</label>
              </div>
              <!-- Text input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="text"
                  type="text"
                  placeholder="Enter the text here..."
                  style="height: 10rem"
                  v-model="text"
                  required
                ></textarea>
                <label for="text">Text</label>
              </div>
              <!-- Address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="address"
                  type="text"
                  placeholder="Enter str. and str. nr. ..."
                  v-model="address"
                  required
                />
                <label for="address">Street and street number</label>
              </div>
              <!-- Google Maps input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="maps"
                  type="text"
                  placeholder="Enter the google maps link..."
                  v-model="maps"
                />
                <label for="maps">Google Maps Link</label>
              </div>
              <!-- Photo input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="photo"
                  type="text"
                  placeholder="Enter the photo link..."
                  v-model="photo"
                />
                <label for="photo">Photo Link</label>
              </div>
              <!-- Website input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="website"
                  type="text"
                  placeholder="Enter the website..."
                  v-model="website"
                />
                <label for="website">Website</label>
              </div>
              <!-- Instagram input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="instagram"
                  type="text"
                  placeholder="Enter the instagram account..."
                  v-model="instagram"
                />
                <label for="instagram">Instagram</label>
              </div>
              <!-- Facebook input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="facebook"
                  type="text"
                  placeholder="Enter the facebook profile..."
                  v-model="facebook"
                />
                <label for="facebook">Facebook</label>
              </div>
              <!-- Other link input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="other-link"
                  type="text"
                  placeholder="Enter other related link..."
                  v-model="otherLink"
                />
                <label for="other-link">Other related link</label>
              </div>
              <!-- Tags input-->
              <div class="form-floating mb-4">
                <input
                  class="form-control mb-2"
                  style="width: 85%; display: inline"
                  id="tagInput"
                  type="text"
                  placeholder="Add tags like restaurant, bar, gym..."
                  v-model="tagInput"
                />
                <label for="tagInput"
                  >Add tags like restaurant, bar, gym...</label
                >
                <span
                  @click="addTag()"
                  style="cursor: pointer; font-size: 2rem; margin-left: 1rem"
                >
                  <i class="bi bi-plus-square-fill" style="color: orange"></i>
                </span>
                <!-- Tags -->
                <button
                  v-for="tag in tags"
                  type="button"
                  class="btn btn-light"
                  @click="removeTag(tag)"
                  :key="tag"
                >
                  {{ tag }}
                  <span class="badge bg-danger">X</span>
                </button>
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
import { CreateRecommendation } from "@/store/types/types";
import { ref } from "vue";
import { createRecommendation } from "@/services/recommendationService";
import { useStore } from "vuex";
import { getCityDIdFromRoute, getUserDIdFromRoute, moveUp } from "./helpers";
import {
  allowOrRedirectToHome,
  redirectToUserProfile,
} from "@/services/authService";
import { getCityByDId } from "@/services/cityService";

allowOrRedirectToHome();
const userDId: string = getUserDIdFromRoute();
const store = useStore();
const city = ref();
const showSuccess = ref("");
const showError = ref("");
const placeName = ref("");
const title = ref("");
const text = ref("");
const address = ref("");
const maps = ref("");
const photo = ref("");
const website = ref("");
const instagram = ref("");
const facebook = ref("");
const otherLink = ref("");
const tagInput = ref("");
let tagHolder: Array<string> = [];
const tags = ref(tagHolder);

(async () => {
  city.value = await getCityByDId(getCityDIdFromRoute());
})();

function addTag() {
  if (tagInput.value) {
    if (tagInput.value.includes(",")) {
      const tags = tagInput.value.split(",");
      tags.forEach((tag) => {
        if (tag.includes(" ")) {
          const subTags = tag.split(" ");
          subTags.forEach((subTag) => {
            addTagIfNotDuplicated(subTag);
          });
        } else {
          addTagIfNotDuplicated(tag);
        }
      });
    } else if (tagInput.value.includes(" ")) {
      const tags = tagInput.value.split(" ");
      tags.forEach((tag) => {
        addTagIfNotDuplicated(tag);
      });
    } else {
      addTagIfNotDuplicated(tagInput.value);
    }
    tagInput.value = "";
  }
}

function addTagIfNotDuplicated(tag: string) {
  if (!tags.value.includes(tag)) {
    tags.value.push(tag);
  }
}

function removeTag(tag: string) {
  tags.value = tags.value.filter((t) => t !== tag);
}

function resetAllInputs() {
  placeName.value = "";
  title.value = "";
  text.value = "";
  address.value = "";
  maps.value = "";
  photo.value = "";
  website.value = "";
  instagram.value = "";
  facebook.value = "";
  otherLink.value = "";
  tagInput.value = "";
}

async function addRecommendation() {
  if (city.value) {
    if (!placeName.value) {
      showError.value = "A name for this place is required.";
    } else if (!title.value) {
      showError.value = "A title is required.";
    } else if (!text.value) {
      showError.value = "A text is required.";
    } else if (!address.value) {
      showError.value = "Address is required.";
    } else {
      const newRecommendation: CreateRecommendation = {
        placeName: placeName.value,
        title: title.value,
        text: text.value,
        address: address.value,
        maps: maps.value,
        website: website.value,
        instagram: instagram.value,
        facebook: facebook.value,
        otherLink: otherLink.value,
        photo: photo.value,
        cityDId: city.value.dId,
        tags: tags.value,
        fromUserDId: store.getters.getLoggedUser.dId,
        toUserDId: userDId,
      };
      const response = await createRecommendation(newRecommendation);
      if (!response) {
        showSuccess.value = "";
        showError.value = "Error while creating the Recommendation :(";
        console.log("Error: No Response on Create Recommendation");
        moveUp();
      } else if (response.status !== 201) {
        showSuccess.value = "";
        showError.value = "Error while creating the Recommendation :(";
        console.log("Error: HttpResponse " + response.statusText);
        moveUp();
      } else {
        showError.value = "";
        showSuccess.value = "Recommendation Created! :)";
        resetAllInputs();
        moveUp();
      }
    }
  } else {
    redirectToUserProfile(store.getters.getLoggedUser.dId);
  }
}
</script>
