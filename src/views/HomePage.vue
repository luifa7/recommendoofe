<template>
  <!-- Header-->
  <header class="bg-orange py-3 py-md-5">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-12 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder text-white mb-2 logo-font">
              Recommendoo
            </h1>
            <h2 class="display-5 text-white mb-2">
              A place to find recommendations with a personal meaning for you
            </h2>
            <p class="lead fw-bold text-white-50 mb-4">
              Get recommendations for places you will visit only from friends
              and family . Also share yours with the people you know.
            </p>
            <div
              class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"
            >
              <router-link
                class="btn btn-primary btn-lg px-4 me-sm-3"
                :to="{
                  name: 'LoginUser',
                }"
                >Find Recommendations</router-link
              >
              <router-link
                class="btn btn-outline-light btn-lg px-4"
                :to="{
                  name: 'About',
                }"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <img
            class="img-fluid rounded-3 my-5"
            src="https://pi.tedcdn.com/r/pb-assets.tedcdn.com/system/baubles/files/000/007/765/original/img-header.png?1561940763?w=320"
            alt="..."
          />
        </div>
      </div>
    </div>
  </header>
  <!-- Features section-->
  <section class="py-3 py-md-5" id="features">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h2 class="fw-bolder mb-0">A cozy place to find new places.</h2>
        </div>
        <div class="col-lg-8">
          <div class="row gx-5 row-cols-1 row-cols-md-2">
            <div class="col mb-5 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-check-square-fill"></i>
              </div>
              <h2 class="h5">Get recommendations from people you know</h2>
              <p class="mb-0">
                Only contacts you invited to join your network can give you
                recommendations. This make it more personal avoiding fakes.
              </p>
            </div>
            <div class="col mb-5 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-building"></i>
              </div>
              <h2 class="h5">
                Ask for information when you plan to visit a city
              </h2>
              <p class="mb-0">
                Share your travel destiny and let your friends know that they
                can send you their favourit places.
              </p>
            </div>
            <div class="col mb-5 mb-md-0 h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-diagram-3-fill"></i>
              </div>
              <h2 class="h5">Someone who know someone</h2>
              <p class="mb-0">
                Maybe your contacts haven't been on that city, but you can see
                if some of them know someone who has been there.
              </p>
            </div>
            <div class="col h-100">
              <div
                class="feature bg-primary bg-gradient text-white rounded-3 mb-3"
              >
                <i class="bi bi-hand-thumbs-up-fill"></i>
              </div>
              <h2 class="h5">Improve your list</h2>
              <p class="mb-0">
                After you visited the place, decide if you will keep or delete
                that recommendation, also giving a rating if you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
