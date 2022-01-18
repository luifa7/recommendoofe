<template>
  <!-- Page Content-->
  <section class="py-3">
    <div class="container px-5 my-4">
      <div class="text-center mb-5">
        <h1 class="logo-font">
          <span v-if="isVisited">Visited cities </span>
          <span v-else>Cities to visit </span>
          <router-link
            v-if="displayAddButton"
            :to="{
              name: 'AddCity',
            }"
          >
            <i class="bi bi-plus-square-fill" style="color: orange"></i>
          </router-link>
        </h1>
        <p class="lead fw-normal text-muted mb-0">See or add recommendations</p>
      </div>
      <div class="row gx-5">
        <div class="col-lg-6" v-for="city in cities" :key="city.dId">
          <city-card :city="city" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CityCard from "@/components/CityCard.vue";
import { useUserStore } from "@/store/userStore";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { City, User } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";
import { useRoute } from "vue-router";

allowOrRedirectToHome();
const route = useRoute();
let isVisited = false;
if (route.name == "CitiesVisited") {
  isVisited = true;
}
const userStore = useUserStore();
const userDId: string = getUserDIdFromRoute();
const cities = ref();
const displayAddButton = ref(true);
const loggedInUser: User = userStore.loggedInUser;
const loggedUserCities: Array<City> = userStore.userCities;

(async () => {
  if (loggedInUser.dId !== userDId) {
    displayAddButton.value = false;
    cities.value = await getCitiesByUserDId(userDId);
  } else {
    cities.value = loggedUserCities;
  }
  cities.value = cities.value.filter((c: City) => c.visited === isVisited);
})();
</script>
