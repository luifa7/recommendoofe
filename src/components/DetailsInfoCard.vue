<template>
  <!-- Details-->
  <section v-if="recommendation && city" class="mb-5">
    <div class="card border-light mb-3" style="max-width: 38rem">
      <h5 class="card-header">Details</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="bi bi-house-door-fill"></i>{{ recommendation.address }},
          {{ city?.name }},
          {{ city?.country }}
        </li>
        <li v-if="recommendation.website" class="list-group-item">
          <i class="bi bi-globe"></i>
          <a
            :href="recommendation.website"
            target="_blank"
            class="link-success"
            >{{ getLinkNameToDisplay(recommendation.website) }}</a
          >
        </li>
        <li v-if="recommendation.instagram" class="list-group-item">
          <i class="bi bi-instagram"></i>
          <a
            :href="recommendation.instagram"
            target="_blank"
            class="link-success"
            >{{ getLinkNameToDisplay(recommendation.instagram) }}</a
          >
        </li>
        <li v-if="recommendation.facebook" class="list-group-item">
          <i class="bi bi-facebook"></i>
          <a
            :href="recommendation.facebook"
            target="_blank"
            class="link-success"
          >
            {{ getLinkNameToDisplay(recommendation.facebook) }}</a
          >
        </li>
        <li v-if="recommendation.otherLink" class="list-group-item">
          <i class="bi bi-link-45deg"></i>
          <a
            :href="recommendation.otherLink"
            target="_blank"
            class="link-success"
            >{{ getLinkNameToDisplay(recommendation.otherLink) }}</a
          >
        </li>
        <li v-if="recommendation.maps" class="list-group-item">
          <i class="bi bi-geo-alt-fill"></i>
          <a :href="recommendation.maps" target="_blank" class="link-success">{{
            getLinkNameToDisplay(recommendation.maps)
          }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { City, Recommendation } from "@/store/types/types";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    recommendation: {
      type: Object as PropType<Recommendation>,
      defafult: undefined,
    },
    city: {
      type: Object as PropType<City>,
      defafult: undefined,
    },
  },
  setup() {
    function getLinkNameToDisplay(linkName: string): string {
      if (linkName.length > 40) {
        return linkName.substring(0, 38) + "...";
      }
      return linkName;
    }

    return {
      getLinkNameToDisplay,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
i {
  margin: 0 1rem 0 0;
}
</style>
