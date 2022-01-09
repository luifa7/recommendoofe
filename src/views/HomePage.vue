<template>
  <!-- Header-->
  <header class="bg-orange py-5">
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
  <section class="py-5" id="features">
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
                Maybe your contacts haven been on that city, but you can see if
                some of them know someone who been there.
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
  <!-- Testimonial section-->
  <div class="py-5 bg-light">
    <div class="container px-5 my-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-10 col-xl-7">
          <div class="text-center">
            <div class="fs-4 mb-4 fst-italic">
              "Using Recommendoo has saved me lot of time when searching for new
              places to visit! Trusting the recommendations instead of filtering
              throug fake reviews is unpayable!"
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <img
                class="rounded-circle me-3"
                src="data:image/webp;base64,UklGRkYEAABXRUJQVlA4IDoEAABQFACdASpgAGAAPpE+mkglo6KhK5YsKLASCWUA1DW1GJ/WWZ06L7f5fQPLlMK98aHLznAsx8P4bc4urzNQdyqTZ8396qMokBqKu4J0i+iyhLl5zlSzbxmosGgWlQSZ/SBi/VAtnB9/KMKpgEce2uF66HNBjjdmL1YMMFJPaVyhJL5TqZtVwiuZwSSsMFdq+Mkb+YiMbKrXqhNc//yzKxJDIzvBOzci5p69/yAA/vfQpc/9IKsXNbG5OLMbUDw9JnSfiqaKXQm26PqF3jjqTdKYpd7MBGYt7XLIUpVUPPhAJqxE0q7FL4IG8KyNufaxaJDpZv8IgaUCr5HlSJ+P5W6rPQj15mz/V/QXQGRbesJLPeSfGyWbsUXP1nPOYYATO5uPOjiaG2XSZYYKgDHdVjo3iAm4SXGs5mymTqISRngQ1FPnHqpg+Bf2inYgSVHkp4OdVHFmBaJ/HK0pu2MMpIkoNZvqe8Sf2m/ochOT2Fx/t2xs2EP1vHsCv+FGgUuYi/q1Et5QIi4nA91zZkgvr1GkEXUUpNA/iWTIJU7RjBvoG8rGyU7Pnnk4HboPxvTZozh2csx6j72qrbSLfJRBr5ySk4mCXN/dOgb9wT4iIku2HYr4+UA9dGQJClMtT9eCHRV+pEuO0yjvMCHnI8rj9djStBCE0cbgPcD15tmilIt97nFchxPvh8/wpHTrzw0zEcpQXa4oHQ6uxV5mkCPFNMlGr9EIGUT1jHOFnpr6P5ahlb+VymIFP5qyQPiEHCMX24FGhqrw6aVFsDpgrEPrt1rK/1hL3oZQzTP1jpi2KgjhgQNow/+gsLKSRMd7dFCVQo/T6bJrfwJk2z0qpfpE8b3vTUcuwlB7u5Bms+YIVi1iIdX8P0qLLcoVB9+BmeICrir+ffDOkowXm/Ak5EEq6vZ8bfXh5sp2xaIy1ADyAEtvgzy6+ZtGY7hIcgGvljnMg/QXnpNBMx+JA5PV8Tc4yTB18cHgCIUUeuBS5xh93H4MdA74j9dVg5akOQvd9gAfkT4V/677efEYhjCHKdHzScjxLbGdt96n5tbqjqH7AwmJFEQwOKe9H6cefhtM1akrwx5el2a9WqDI/2G/UdSi0ItA+8XZf729830sSK9vLukqMUj4VuhHFbuXBSMmgg4xM+mqbOoyl6S9Zm0Pfd5wIEyy78KvmG9U8ZcZL6NjwCwRMRmZWuJkP6J7ZPSi9gAv6StPGVx62pqYKy/sILQEkCkhs+qwXwz5UT+X88A/awlzUO5ISOYOV6+0fAIrITD9XwvBcQS25WvMJSza2mLxlhfSenSbMB/A64BRPf0RgjZZ4CupT9SAJgK7LtWyBwJcXEkTQpPG7JzssAUurM+mX0H0aUkGPZniFLaubBQ4N2n0sKLxo9jnR2OZlLgKiBGBjSmeBBVkB3PJ8jhOhenO/LLGpQHbDH8C1wAAAA=="
                alt="..."
              />
              <div class="fw-bold">
                Lyaksandro Kaleva Góðoysson
                <span class="fw-bold text-primary mx-1">/</span>
                CEO, Recommendoo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
