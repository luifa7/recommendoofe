<template>
  <!-- Page Content-->
  <header class="text-black text-center py-4">
    <!-- Masthead Avatar Image-->
    <img
      v-if="city"
      class="mb-4 rounded-3"
      :src="city.photo"
      alt="..."
      style="max-width: 20rem"
    />
    <h1 class="logo-font">
      Recommendations
      <router-link
        :to="{
          name: 'AddRecommendation',
        }"
      >
        <i class="bi bi-plus-square-fill" style="color: orange"></i>
      </router-link>
    </h1>
    <p v-if="city" class="lead logo-font text-muted mb-0">
      for {{ city.name }}, {{ city.country }}
    </p>
    <button
      v-if="canDelete"
      type="button"
      class="btn btn-danger"
      @click="deleteCi()"
    >
      <i class="bi bi-trash"></i> Delete City
    </button>
  </header>
  <section class="py-5">
    <div class="container px-5">
      <div class="row gx-5">
        <div
          class="col-lg-4 mb-5"
          v-for="recommendation in recommendations"
          :key="recommendation.dId"
        >
          <recommendation-card :recommendation="recommendation" />
        </div>
        <h4 v-if="recommendations.length == 0" class="logo-font text-center">
          No recommendations to display
        </h4>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ComputedRef, Ref, ref } from "vue";
import RecommendationCard from "@/components/RecommendationCard.vue";
import { getCityDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { getCityByDId } from "@/services/cityService";
import { getRecommendationsByCityDId } from "@/services/recommendationService";
import { City, Recommendation } from "@/store/types/types";
import { deleteCity, getCitiesByUserDId } from "@/services/cityService";
import router from "@/router";
import { useUserStore } from "@/store/userStore";

allowOrRedirectToHome();
const userStore = useUserStore();
const city: Ref<City | undefined> = ref();
const recommendations: Ref<Array<Recommendation>> = ref([]);
const cityDId: string = getCityDIdFromRoute();

(async () => {
  city.value = await getCityByDId(cityDId);
  recommendations.value = await getRecommendationsByCityDId(cityDId);
})();

const canDelete: ComputedRef<boolean> = computed(
  () => userStore.loggedInUser?.dId === city.value?.userDId
);

async function deleteCi() {
  if (city.value && userStore.loggedInUser) {
    const response = await deleteCity(city.value.dId);
    if (!response) {
      console.log("Error: No Response on Delete city");
    } else if (response.status !== 204) {
      console.log(response.statusText);
    } else {
      const cities = await getCitiesByUserDId(userStore.loggedInUser.dId);
      userStore.setLoggedUserCities(cities);
      if (city.value.visited) {
        router.push({
          name: "CitiesVisited",
          params: { userdid: city.value.userDId },
        });
      } else {
        router.push({
          name: "CitiesToVisit",
          params: { userdid: city.value.userDId },
        });
      }
    }
  }
}
</script>
