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
                <div class="invalid-feedback">
                  A name for this place is required.
                </div>
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
                <div class="invalid-feedback">A title is required.</div>
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
                <div class="invalid-feedback">A text is required.</div>
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
                <div class="invalid-feedback">Address is required.</div>
              </div>
              <!-- Google Maps input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="maps"
                  type="text"
                  placeholder="Enter the google maps link..."
                  v-model="maps"
                  required
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
import { CreateRecommendation } from "@/store/types/types";
import { defineComponent, ref } from "vue";
import { createRecommendation } from "@/services/recommendationService";
import { useStore } from "vuex";
import { getCityDIdFromRoute, getUserDIdFromRoute } from "./helpers";
import {
  allowOrRedirectToHome,
  redirectToUserProfile,
} from "@/services/authService";
import { getCityByDId } from "@/services/cityService";

export default defineComponent({
  setup() {
    allowOrRedirectToHome();
    const userDId: string = getUserDIdFromRoute();
    const store = useStore();
    const city = ref();
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
    var tags: Array<string> = [];

    (async () => {
      city.value = await getCityByDId(getCityDIdFromRoute());
    })();

    async function addRecommendation() {
      if (city.value) {
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
          tags: tags,
          fromUserDId: store.getters.getLoggedUser.dId,
          toUserDId: userDId,
        };
        const response = await createRecommendation(newRecommendation);
        if (!response) {
          console.log("Error: No Response on Create Recommendation");
        } else if (response.status !== 201) {
          console.log(response.statusText);
        } else {
          console.log("Recommendation Created");
        }
      } else {
        redirectToUserProfile(store.getters.getLoggedUser.dId);
      }
    }
    return {
      city,
      placeName,
      title,
      text,
      address,
      maps,
      photo,
      website,
      instagram,
      facebook,
      otherLink,
      addRecommendation,
    };
  },
});
</script>
