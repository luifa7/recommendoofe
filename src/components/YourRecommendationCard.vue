<template>
  <div v-if="recommendation" class="card h-100 shadow border-0">
    <img
      v-if="recommendation.photo"
      class="card-img-top"
      :src="recommendation.photo"
      alt="..."
    />
    <img
      v-else
      class="card-img-top"
      src="https://dummyimage.com/1300x700/343a40/6c757d"
      alt="..."
    />
    <div class="card-body p-4">
      <router-link
        :to="{
          name: 'SingleRecommendation',
          params: {
            userdid: recommendation.toUserDId,
            citydid: recommendation.cityDId,
            recommendationdid: recommendation.dId,
          },
        }"
        :recommendation="recommendation"
        class="text-decoration-none link-dark stretched-link"
      >
        <div class="h5 logo-font card-title mb-1">
          {{ recommendation.placeName }}
        </div></router-link
      >
      <p class="card-text">
        {{ recommendation.title }}
      </p>
      <div
        v-for="tag in recommendation.tags"
        class="badge bg-primary bg-gradient rounded-pill mb-2"
        :key="tag"
      >
        {{ tag }}
      </div>
    </div>
    <div
      v-if="recommendedToUser"
      class="card-footer p-4 pt-0 bg-transparent border-top-0"
    >
      <div class="d-flex align-items-end justify-content-between">
        <div class="d-flex align-items-center">
          <div class="col-md-6 col-md-6 d-none d-md-block">
            <img
              v-if="recommendedToUser.photo"
              class="rounded-3 me-3"
              :src="recommendedToUser.photo"
              alt="..."
              style="max-height: 100px; max-width: 100px"
            />
            <img
              v-else
              class="rounded-3 me-3"
              src="https://dummyimage.com/40x40/ced4da/6c757d"
              alt="..."
            />
          </div>

          <div class="small">
            <div>For:</div>
            <div class="logo-font">
              {{ recommendedToUser.name }}
            </div>
            <div class="text-muted">on {{ createdOn }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserByDId } from "@/services/userService";
import { Recommendation, User } from "@/store/types/types";
import { getDateFromDatetime } from "@/views/helpers";
import { Ref, ref } from "vue";

const props = defineProps<{ recommendation: Recommendation }>();

const recommendedToUser: Ref<User | undefined> = ref();
const createdOn: Ref<string> = ref("");

(async () => {
  if (props.recommendation) {
    recommendedToUser.value = await getUserByDId(
      props.recommendation.toUserDId
    );
    createdOn.value = getDateFromDatetime(props.recommendation.createdOn);
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
div.badge {
  margin: 0 0.3rem 0 0;
}
</style>
