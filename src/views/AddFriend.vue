<template>
  <!-- Page content-->
  <section class="py-5">
    <div class="container px-5">
      <!-- Add Recommendation form-->
      <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
        <div class="text-center mb-5">
          <div class="feature bg-orange bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-person-plus-fill"></i>
          </div>
          <h1 class="fw-bolder">Find Friends to Add</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { CreateCity } from "@/store/types/types";
import { defineComponent, ref } from "vue";
import { createCity, getCitiesByUserDId } from "@/services/cityService";
import { getUserDIdFromRoute, moveUp } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
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
    return {
      name,
      country,
      photo,
      isVisited,
      showSuccess,
      showError,
      addCity,
    };
  },
});
</script>
<style scoped>
.form-check {
  margin: 0 0 1rem 0;
}
</style>
