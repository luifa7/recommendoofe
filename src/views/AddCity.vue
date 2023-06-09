<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Add Recommendation form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-orange bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-building"></i>
          </div>
          <h1 class="logo-font">Add new city</h1>
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
              <!-- Google Maps Autocomplete-->
              <div class="form-floating mb-3">
                <input 
                class="form-control"
                id="google-maps-input"
                ref="cityInput" 
                type="text" 
                placeholder="Search for a city" 
                />
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
import { Ref, ref, onMounted } from "vue";
import { createCity, getCitiesByUserDId } from "@/services/cityService";
import { getUserDIdFromRoute, moveUp } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI';

allowOrRedirectToHome();
const userStore = useUserStore();
const userDId: string = getUserDIdFromRoute();
const showSuccess: Ref<string> = ref("");
const showError: Ref<string> = ref("");
const name: Ref<string> = ref("");
const country: Ref<string> = ref("");
const photo: Ref<string> = ref("");
const isVisited: Ref<boolean> = ref(false);


const cityInput = ref<HTMLInputElement | null>(null);
  let options = {
  types: ['(cities)']
};
let autocomplete: google.maps.places.Autocomplete;
if (cityInput.value) {
  autocomplete = new google.maps.places.Autocomplete(cityInput.value, options);
}

  onMounted(async () => {
  await loadGoogleMapsAPI();

  // Add a delay before initializing the Autocomplete service
  setTimeout(() => {
    if (cityInput.value) {
      autocomplete = new google.maps.places.Autocomplete(cityInput.value, {
        fields: ['address_components'],
      });

      autocomplete.addListener('place_changed', onPlaceChanged);
    }
  }, 2000);  // 2 seconds delay
});


function onPlaceChanged() {
  let place = autocomplete.getPlace();
  let mapsCity, mapsCountry;

  if (place.address_components){

    for (let i = 0; i < place.address_components.length; i++) {
    let component = place.address_components[i];
    for (let j = 0; j < component.types.length; j++) {
      if (component.types[j] === 'locality' || component.types[j] === 'administrative_area_level_1' || 
          component.types[j] === 'administrative_area_level_2' || component.types[j] === 'administrative_area_level_3' ||
          component.types[j] === 'administrative_area_level_4') {
        mapsCity = component.long_name;
      } else if (component.types[j] === 'country') {
        mapsCountry = component.long_name;
      }
    }
  }

  name.value =  mapsCity || "";
  country.value = mapsCountry || "";
  }
  }


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
      showError.value = "Error while creating the City :(";
      console.log("Error: HttpResponse " + response.statusText);
      moveUp();
    } else {
      const cities = await getCitiesByUserDId(userDId);
      userStore.setLoggedUserCities(cities);
      showError.value = "";
      showSuccess.value = "City Created! :)";
      resetAllInputs();
      moveUp();
      setTimeout(() => (showSuccess.value = ""), 4000);
    }
  }
}
</script>
<style scoped>
.form-check {
  margin: 0 0 1rem 0;
}
</style>
