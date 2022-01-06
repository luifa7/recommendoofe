<template>
  <!-- Page Content-->
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="fw-bolder">
          <span v-if="isVisited">Visited Cities </span>
          <span v-else>Cities to visit </span>
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
import { defineComponent, ref } from "vue";
import CityCard from "@/components/CityCard.vue";
import { useStore } from "vuex";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { City } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { CityCard },
  setup() {
    allowOrRedirectToHome();
    const route = useRoute();
    let isVisited = false;
    if (route.name == "CitiesVisited") {
      isVisited = true;
    }
    const store = useStore();
    const userDId: string = getUserDIdFromRoute();
    const cities = ref();
    const displayAddButton = ref(true);

    (async () => {
      if (store.getters.getLoggedUser.dId !== userDId) {
        displayAddButton.value = false;
        cities.value = await getCitiesByUserDId(userDId);
      } else {
        cities.value = store.getters.getLoggedUserCities;
      }
      cities.value = cities.value.filter((c: City) => c.visited === isVisited);
    })();

    return { isVisited, cities, displayAddButton };
  },
});
</script>
