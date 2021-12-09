<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">
          Cities to visit
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

<script lang="ts">
// import axios from "axios";
import { defineComponent } from "@vue/runtime-core";
import { CityCard } from "@/components";
import {
  allowOrRedirectToHome,
  getCitiesPlannedForUserDId,
} from "@/services/dataService";
import { useStore } from "vuex";
import { getUserDIdFromRoute } from "./helpers";

export default defineComponent({
  components: { CityCard },
  setup() {
    allowOrRedirectToHome();
    const userDId: string = getUserDIdFromRoute();
    const store = useStore();
    let displayAddButton = false;
    if (
      store.getters.getLoggedUser &&
      store.getters.getLoggedUser.dId === userDId
    ) {
      displayAddButton = true;
    }

    return {
      cities: getCitiesPlannedForUserDId(userDId),
      // loading: true,
      loading: false,
      errored: false,
      displayAddButton,
    };
  },
});
</script>
