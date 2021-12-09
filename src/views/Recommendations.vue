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
// import axios from "axios";
import { defineComponent } from "@vue/runtime-core";
import { RecommendationCard } from "@/components";
import {
  allowOrRedirectToHome,
  getCitiyByDId,
  getRecommendationsForUserDIdInCityDId,
} from "@/services/dataService";
import { getCityDIdFromRoute, getUserDIdFromRoute } from "./helpers";
import { City, Recommendation } from "@/store/types/types";

export default defineComponent({
  components: { RecommendationCard },
  setup() {
    allowOrRedirectToHome();
    const cityDId: string = getCityDIdFromRoute();
    const recommendations: Array<Recommendation> =
      getRecommendationsForUserDIdInCityDId(getUserDIdFromRoute(), cityDId);
    const city: City | undefined = getCitiyByDId(cityDId);

    return {
      recommendations,
      city,
      // loading: true,
      loading: false,
      errored: false,
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:5003/recommendations")
  //     .then((response) => (this.info = response.data as Recommendations))
  //     .catch((error) => {
  //       console.log(error);
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // },
});
</script>
