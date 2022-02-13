<template>
  <!-- Page Content-->
  <section class="py-3">
    <div class="container px-5 my-4">
      <div class="text-center mb-5">
        <h1 class="logo-font">
          <span>Notifications</span>
        </h1>
      </div>
    </div>
    <h4 v-if="displayNoNotificationsMessage" class="logo-font text-center">
      You havent no notifications
    </h4>
    <table v-else class="table">
      <tbody>
        <tr v-for="notification in notifications" :key="notification.dId">
          <td v-if="notification.wasOpen" class="read">
            {{ notification.text }}
          </td>
          <td v-else class="unread">
            {{ notification.text }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { allowOrRedirectToHome } from "@/services/authService";
import { Notification } from "@/store/types/types";
import {
  getAllNotificationsByUserDId,
  markAllNotificationsAsReadByUserDId,
} from "@/services/notificationService";

allowOrRedirectToHome();
const notifications: Ref<Array<Notification>> = ref([]);
const displayNoNotificationsMessage: Ref<boolean> = ref(false);

(async () => {
  notifications.value = await getAllNotificationsByUserDId();
  displayNoNotificationsMessage.value = notifications.value.length === 0;
  await markAllNotificationsAsReadByUserDId();
})();
</script>
<style scoped>
.read {
  background-color: rgba(185, 204, 185, 0.4);
}
.unread {
  background-color: rgba(51, 170, 51, 0.4);
}
</style>
