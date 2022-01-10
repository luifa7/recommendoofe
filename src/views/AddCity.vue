<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Add Recommendation form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-orange bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-bookmark-plus-fill"></i>
          </div>
          <h1 class="fw-bolder">Add new city</h1>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <form id="add-city-form" @submit.prevent="addCity">
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
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter the name of the city..."
                  v-model="name"
                  required
                />
                <label for="name">City name</label>
              </div>
              <!-- Country input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="country"
                  type="text"
                  placeholder="Enter the country..."
                  v-model="country"
                  required
                />
                <label for="country">Country</label>
              </div>
              <!-- Photo input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="photo"
                  type="text"
                  placeholder="Enter the photo..."
                  v-model="photo"
                />
                <label for="photo">Photo</label>
              </div>
              <!-- Is visited input-->
              <div class="form-check">
                <input
                  class="form-check-input"
                  id="isVisited"
                  type="checkbox"
                  v-model="isVisited"
                />
                <label for="isVisited">
                  Have you already visited this city?
                </label>
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
import { CreateCity } from "@/store/types/types";
import { ref } from "vue";
import { createCity, getCitiesByUserDId } from "@/services/cityService";
import { getUserDIdFromRoute, moveUp } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";

allowOrRedirectToHome();
const store = useStore();
const userDId: string = getUserDIdFromRoute();
const showSuccess = ref("");
const showError = ref("");
const name = ref("");
const country = ref("");
const photo = ref("");
const isVisited = ref(false);

function resetAllInputs() {
  name.value = "";
  country.value = "";
  photo.value = "";
  isVisited.value = false;
}

async function addCity() {
  if (!name.value) {
    showError.value = "A name for this city is required.";
  } else if (!country.value) {
    showError.value = "A country is required.";
  } else {
    const newCity: CreateCity = {
      name: name.value,
      country: country.value,
      photo: photo.value,
      userDId: userDId,
      visited: isVisited.value,
    };
    const response = await createCity(newCity);
    if (!response) {
      showSuccess.value = "";
      showError.value = "Error while creating the City :(";
      console.log("Error: No Response on Create City");
      moveUp();
    } else if (response.status !== 201) {
      showSuccess.value = "";
      showError.value = "Error while creating the Recommendation :(";
      console.log("Error: HttpResponse " + response.statusText);
      moveUp();
    } else {
      const cities = await getCitiesByUserDId(userDId);
      store.commit("setLoggedUserCities", cities);
      showError.value = "";
      showSuccess.value = "City Created! :)";
      resetAllInputs();
      moveUp();
    }
  }
}
</script>
<style scoped>
.form-check {
  margin: 0 0 1rem 0;
}
</style>
