<template>
  <div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loging out...</span>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/userStore";
import router from "@/router";
import { allowOrRedirectToHome } from "@/services/authService";
allowOrRedirectToHome();
const userStore = useUserStore();
userStore.logoutUser();
router.push({
  name: "Home",
});
</script>
