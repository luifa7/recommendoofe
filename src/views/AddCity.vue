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
                <div class="invalid-feedback">
                  A name for this city is required.
                </div>
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
                <div class="invalid-feedback">A country is required.</div>
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
import { City } from "@/store/types/types";
import { defineComponent, ref } from "vue";
import { allowOrRedirectToHome, createCity } from "@/services/dataService";
import { getUserDIdFromRoute } from "./helpers";

export default defineComponent({
  setup() {
    allowOrRedirectToHome();
    const userDId: string = getUserDIdFromRoute();
    const name = ref("");
    const country = ref("");
    const photo = ref("");

    function addCity() {
      const newCity: City = {
        dId: Date.now().toString(),
        name: name.value,
        country: country.value,
        photo: photo.value,
        userDId: userDId,
        visited: false,
      };
      createCity(newCity);
    }
    return {
      name,
      country,
      photo,
      addCity,
    };
  },
});
</script>
