<template>
  <!-- Page Content-->
  <header class="text-black text-center py-4">
    <!-- Masthead Avatar Image-->
    <h1 class="logo-font">Your posts</h1>
  </header>
  <section class="py-5">
    <div class="container px-5">
      <div class="row gx-5">
        <h4 v-if="displayNoPostsMessage" class="logo-font text-center">
          You still havent posted anything
        </h4>
        <div
          v-else
          class="col-lg-4 mb-5"
          v-for="recommendation in recommendations"
          :key="recommendation.dId"
        >
          <your-recommendation-card :recommendation="recommendation" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import YourRecommendationCard from "@/components/YourRecommendationCard.vue";
import { allowOrRedirectToHome } from "@/services/authService";
import { Recommendation } from "@/store/types/types";
import { getRecommendationsByUserCreatorDId } from "@/services/recommendationService";

allowOrRedirectToHome();
const recommendations: Ref<Array<Recommendation>> = ref([]);
const displayNoPostsMessage: Ref<boolean> = ref(false);

(async () => {
  recommendations.value = await getRecommendationsByUserCreatorDId();
  displayNoPostsMessage.value = recommendations.value.length === 0;
})();
</script>
