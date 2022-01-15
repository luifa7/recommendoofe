<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div v-if="recommendation" class="row gx-5">
        <div v-if="recommendedByUser" class="col-lg-3">
          <div class="d-flex align-items-center mt-lg-5 mb-4">
            <router-link
              :to="{
                name: 'UserPublicProfile',
                params: {
                  userdid: recommendedByUser.dId,
                },
              }"
              class="nav-link"
            >
              <img
                v-if="recommendedByUser.photo"
                class="img-fluid rounded-3"
                :src="recommendedByUser.photo"
                alt="..."
                style="max-height: 150px; max-width: 150px"
              />
              <img
                v-else
                class="img-fluid rounded-3"
                src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                alt="..."
              />
            </router-link>
          </div>
          <div>
            <div class="text-muted">Recommended by:</div>
            <router-link
              :to="{
                name: 'UserPublicProfile',
                params: {
                  userdid: recommendedByUser.dId,
                },
              }"
              class="logo-font text-decoration-none"
            >
              {{ recommendedByUser.name }}
            </router-link>
            <div class="text-muted">on {{ createdOn }}</div>
          </div>
        </div>
        <div class="col-lg-9">
          <!-- Recommendation content-->
          <article>
            <!-- Recommendation header-->
            <header class="mb-4">
              <!-- Place Name-->
              <h1 class="logo-font mb-1">{{ recommendation.placeName }}</h1>
              <!-- Tags-->
              <a
                v-for="tag in recommendation.tags"
                class="badge bg-secondary text-decoration-none link-light"
                href="#"
                :key="tag"
                >{{ tag }}</a
              >
            </header>
            <!-- Preview image figure-->
            <figure class="mb-4">
              <img
                v-if="recommendation.photo"
                class="img-fluid rounded"
                :src="recommendation.photo"
                alt="..."
              />
              <img
                v-else
                class="img-fluid rounded"
                src="https://dummyimage.com/1300x700/343a40/6c757d"
                alt="..."
              />
            </figure>
            <!-- Text-->
            <section class="mb-5">
              <h4 class="fw-bold mb-4 mt-5">
                {{ recommendation.title }}
              </h4>
              <p class="fs-5 mb-4">
                {{ recommendation.text }}
              </p>
            </section>
            <details-info-card :recommendation="recommendation" :city="city" />
            <google-maps-iframe :maps-url="recommendation.maps" />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DetailsInfoCard from "@/components/DetailsInfoCard.vue";
import GoogleMapsIframe from "@/components/GoogleMapsIframe.vue";
import { getDateFromDatetime, getRecommendationDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { getUserByDId } from "@/services/userService";
import { getCityByDId } from "@/services/cityService";
import { getRecommendationByDId } from "@/services/recommendationService";

allowOrRedirectToHome();
const recommendation = ref();
const city = ref();
const recommendedByUser = ref();
const createdOn = ref("");

(async () => {
  recommendation.value = await getRecommendationByDId(
    getRecommendationDIdFromRoute()
  );
  if (recommendation.value) {
    recommendedByUser.value = await getUserByDId(
      recommendation.value.fromUserDId
    );
    city.value = await getCityByDId(recommendation.value.cityDId);
    createdOn.value = getDateFromDatetime(recommendation.value.createdOn);
  }
})();
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  margin: 0 0.2rem 0 0;
}
</style>
