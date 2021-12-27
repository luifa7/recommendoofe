<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">Visited Cities</h1>
      </div>
      <div class="row gx-5">
        <div class="col-lg-6" v-for="city in cities" :key="city.dId">
          <city-card :city="city" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// import axios from "axios";
import { defineComponent } from "vue";
import CityCard from "@/components/CityCard.vue";
import {
  allowOrRedirectToHome,
  getCitiesVisitedForUserDId,
} from "@/services/dataService";
import { getUserDIdFromRoute } from "./helpers";

export default defineComponent({
  components: { CityCard },
  setup() {
    allowOrRedirectToHome();
    const userDId: string = getUserDIdFromRoute();

    return {
      cities: getCitiesVisitedForUserDId(userDId),
      // loading: true,
      loading: false,
      errored: false,
    };
  },
});
</script>
