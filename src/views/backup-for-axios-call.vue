<template>
  <h1>Backup Axios</h1>

  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>

    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Map Link</th>
            <th>Website</th>
            <th>Photo</th>
          </tr>
        </thead>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
// import axios from "axios";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    return {
      info: [],
      // loading: true,
      loading: false,
      errored: false,
    };
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:5003/recommendations")
  //     .then((response) => (this.info = response.data as Recommendations))
  //     .catch((error) => {
  //       console.log(error);
  //       this.errored = true;
  //     })
  //     .finally(() => (this.loading = false));
  // },
});
</script>
