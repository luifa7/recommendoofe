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
                class="img-fluid rounded-circle"
                :src="recommendedByUser.photo"
                alt="..."
                style="max-height: 150px; max-width: 150px"
              />
              <img
                v-else
                class="img-fluid rounded-circle"
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
              class="fw-bold"
            >
              {{ recommendedByUser.userName }}
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
              <h1 class="fw-bolder mb-1">{{ recommendation.placeName }}</h1>
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

<script lang="ts">
// import axios from "axios";
import { defineComponent } from "vue";
import { DetailsInfoCard, GoogleMapsIframe } from "@/components";
import { City, Recommendation, User } from "@/store/types/types";
import {
  allowOrRedirectToHome,
  getCitiyByDId,
  getRecommendationByDId,
  getUserByDId,
} from "@/services/dataService";
import { getRecommendationDIdFromRoute } from "./helpers";

export default defineComponent({
  components: { GoogleMapsIframe, DetailsInfoCard },
  setup() {
    allowOrRedirectToHome();
    const recommendation: Recommendation | undefined = getRecommendationByDId(
      getRecommendationDIdFromRoute()
    );
    let city: City | undefined = undefined;
    let recommendedByUser: User | undefined = undefined;
    if (recommendation) {
      city = getCitiyByDId(recommendation.cityDId);
      recommendedByUser = getUserByDId(recommendation.fromUserDId);
    }
    let createdOn = undefined;
    if (recommendation?.createdOn) {
      const createdDatetime = new Date(recommendation.createdOn);
      const year = createdDatetime.getFullYear();
      const month = createdDatetime.getMonth();
      const day = createdDatetime.getDate();
      createdOn = `${day}/${month}/${year}`;
    }
    return {
      recommendation,
      createdOn,
      city,
      recommendedByUser,
      // loading: true,
      loading: false,
      errored: false,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
