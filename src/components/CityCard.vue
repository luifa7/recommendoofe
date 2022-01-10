<template>
  <div v-if="city" class="position-relative mb-5">
    <img
      v-if="city.photo"
      class="img-fluid rounded-3 mb-3"
      :src="city.photo"
      alt="..."
    />
    <img
      v-else
      class="img-fluid rounded-3 mb-3"
      src="https://dummyimage.com/1300x700/343a40/6c757d"
      alt="..."
    />
    <router-link
      v-if="isVisited"
      :to="{
        name: 'RecommendationsVisited',
        params: {
          citydid: city.dId,
        },
      }"
      class="h3 fw-bolder text-decoration-none link-dark stretched-link"
    >
      <div class="h5 card-title mb-3">{{ city.name }}, {{ city.country }}</div>
    </router-link>
    <router-link
      v-else
      :to="{
        name: 'RecommendationsToVisit',
        params: {
          citydid: city.dId,
        },
      }"
      class="h3 fw-bolder text-decoration-none link-dark stretched-link"
    >
      <div class="h5 card-title mb-3">{{ city.name }}, {{ city.country }}</div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { City } from "@/store/types/types";
import { useRoute } from "vue-router";

const props = defineProps<{ city: City }>();
const route = useRoute();
let isVisited = false;
if (route.name == "CitiesVisited") {
  isVisited = true;
}
</script>
