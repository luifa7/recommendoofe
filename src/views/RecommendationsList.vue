<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">
          Recommendations
          <router-link
            :to="{
              name: 'AddRecommendation',
            }"
          >
            <i class="bi bi-plus-square-fill" style="color: orange"></i>
          </router-link>
        </h1>
        <p v-if="city" class="lead fw-normal text-muted mb-0">
          for {{ city.name }}, {{ city.country }}
        </p>
      </div>
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

<script lang="ts">
import { defineComponent } from "vue";
import RecommendationCard from "@/components/RecommendationCard.vue";
import { getCityDIdFromRoute } from "./helpers";
import { City, Recommendation } from "@/store/types/types";
import { allowOrRedirectToHome } from "@/services/authService";
import { getCityByDId } from "@/services/cityService";
import { getRecommendationsByCityDId } from "@/services/recommendationService";

export default defineComponent({
  components: { RecommendationCard },
  beforeCreate() {
    allowOrRedirectToHome();
  },
  data() {
    let city: City | undefined;
    let recommendations: Array<Recommendation> = [];
    return { city, recommendations };
  },
  async mounted() {
    const cityDId: string = getCityDIdFromRoute();
    this.city = await getCityByDId(cityDId);
    this.recommendations = await getRecommendationsByCityDId(cityDId);
  },
});
</script>
