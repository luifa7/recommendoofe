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
import { defineComponent } from "vue";
import CityCard from "@/components/CityCard.vue";
import { getUserDIdFromRoute } from "./helpers";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { City, User } from "@/store/types/types";
import { getUserByDId } from "@/services/userService";
import { getCitiesByUserDId } from "@/services/cityService";

export default defineComponent({
  components: { CityCard },
  beforeCreate() {
    allowOrRedirectToHome();
  },
  data() {
    const store = useStore();
    let user: User | undefined = store.getters.getLoggedUser;
    let cities: Array<City> = store.getters.getLoggedUserCities;
    return { user, cities };
  },
  async mounted() {
    const userDId: string = getUserDIdFromRoute();
    if (!this.user || this.user.dId !== userDId) {
      const myUserDId = "c2f708a5-1f35-486f-aa17-97d3d084ee89";
      this.user = await getUserByDId(myUserDId);
      this.cities = await getCitiesByUserDId(myUserDId);
    }
    this.cities = this.cities.filter((city) => city.visited);
  },
});
</script>
