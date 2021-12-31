<template>
  <div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loging out...</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import router from "@/router";
import { allowOrRedirectToHome } from "@/services/dataService";

export default defineComponent({
  setup() {
    allowOrRedirectToHome();
    const store = useStore();
    store.commit("logoutUser");
    router.push({
      name: "Home",
    });
  },
});
</script>
