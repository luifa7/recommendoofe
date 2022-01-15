<template>
  <!-- Page Content-->
  <header class="text-black text-center py-4">
    <!-- Masthead Avatar Image-->
    <img
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
  </header>
  <section v-if="recommendations.length > 0" class="py-5 bg-light">
    <div class="container px-5">
      <div class="row gx-5">
        <div
          class="col-lg-4 mb-5"
          v-for="recommendation in recommendations"
          :key="recommendation.dId"
        >
          <recommendation-card :recommendation="recommendation" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import RecommendationCard from "@/components/RecommendationCard.vue";
import { getCityDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { getCityByDId } from "@/services/cityService";
import { getRecommendationsByCityDId } from "@/services/recommendationService";

allowOrRedirectToHome();
const city = ref();
const recommendations = ref();
const cityDId: string = getCityDIdFromRoute();

(async () => {
  city.value = await getCityByDId(cityDId);
  recommendations.value = await getRecommendationsByCityDId(cityDId);
})();
</script>
