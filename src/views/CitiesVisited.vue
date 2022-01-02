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
import { defineComponent, ref } from "vue";
import CityCard from "@/components/CityCard.vue";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { City } from "@/store/types/types";
import { getCitiesByUserDId } from "@/services/cityService";

export default defineComponent({
  components: { CityCard },
  setup() {
    allowOrRedirectToHome();
    const store = useStore();
    const userDId: string = getUserDIdFromRoute();
    const cities = ref();

    (async () => {
      if (store.getters.getLoggedUser.dId !== userDId) {
        cities.value = await getCitiesByUserDId(userDId);
      } else {
        cities.value = store.getters.getLoggedUserCities;
      }
      cities.value = cities.value.filter((c: City) => c.visited);
    })();

    return { cities };
  },
});
</script>
