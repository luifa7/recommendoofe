<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-body-color sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="bi bi-sliders"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Settings</div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Your activity</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li :class="{ active: isPostsArea }" class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-journal-bookmark"></i>
          <span>Posts</span>
        </a>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li :class="{ active: isNotificationsArea }" class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-envelope"></i>
          <span>Notifications</span>
        </a>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">User</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li :class="{ active: isInfoArea }" class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-person"></i>
          <span>Info</span>
        </a>
      </li>

      <!-- Nav Item - Charts -->
      <li :class="{ active: isPreferencesArea }" class="nav-item">
        <a class="nav-link" href="#">
          <i class="bi bi-toggles"></i>
          <span>Preferences</span></a
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li :class="{ active: isDeleteArea }" class="nav-item">
        <router-link
          :to="{
            name: 'SettingsDeleteUser',
          }"
          class="nav-link"
          ><i class="bi bi-trash"></i> <span>Delete profile</span></router-link
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />
    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script lang="ts" setup>
import { computed, ComputedRef } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isPostsArea: ComputedRef<boolean> = computed(() =>
  route.path.includes("posts")
);
const isNotificationsArea: ComputedRef<boolean> = computed(() =>
  route.path.includes("notifications")
);
const isInfoArea: ComputedRef<boolean> = computed(() =>
  route.path.includes("info")
);
const isPreferencesArea: ComputedRef<boolean> = computed(() =>
  route.path.includes("preferences")
);
const isDeleteArea: ComputedRef<boolean> = computed(() =>
  route.path.includes("delete")
);
</script>
<style scoped src="@/assets/css/styles-admin.css"></style>
