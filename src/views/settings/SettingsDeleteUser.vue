<template>
  <!-- Page Content-->
  <section class="py-3">
    <div class="container px-5 my-4">
      <div class="text-center mb-5">
        <h1 class="logo-font">
          <span>Delete your account</span>
        </h1>
      </div>
    </div>
  </section>
  <div
    class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"
  >
    <button
      type="button"
      class="btn btn-danger btn-lg px-4 me-sm-3"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Delete <i class="bi bi-trash"></i>
    </button>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Delete your account?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="deleteUser()">
            Yes
          </button>
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deleteUser } from "@/services/userService";
</script>
