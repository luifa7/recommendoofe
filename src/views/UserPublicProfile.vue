<template>
  <!-- Header-->
  <div v-if="user">
    <!-- Masthead-->
    <header class="masthead bg-orange text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img
          class="masthead-avatar mb-4 rounded-3"
          :src="user.photo"
          alt="..."
        />
        <!-- Masthead Heading-->
        <h1 class="masthead-heading fw-bold mb-0">{{ user.name }}</h1>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading fw-bold mb-3">
          {{ user.shortFact1 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact2 }} <i class="bi bi-star-fill"></i>
          {{ user.shortFact3 }}
        </p>
        <div
          class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"
        >
          <router-link
            class="btn btn-primary btn-lg px-4 me-sm-3"
            :to="{
              name: 'CitiesToVisit',
            }"
            >Cities I will visit</router-link
          >
          <router-link
            class="btn btn-outline-light btn-lg px-4"
            :to="{
              name: 'CitiesVisited',
            }"
            >Visited cities</router-link
          >
          <router-link
            class="btn btn-outline-light btn-lg px-4"
            :to="{
              name: 'UserContacts',
              params: {
                userdid: user.dId,
              },
            }"
            >Friends</router-link
          >
        </div>
      </div>
    </header>

    <!-- Recommend me something section-->
    <div class="py-1">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <h2 class="text-center text-uppercase fw-bolder">
                Interested in
              </h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </div>
                <div class="divider-custom-line"></div>
              </div>
              <div class="fs-4 mb-4 fst-italic">
                {{ user.interestedIn }}
              </div>
              <router-link
                class="btn btn-warning btn-lg px-4 me-sm-3 text-white fw-bolder"
                :to="{
                  name: 'CitiesToVisit',
                }"
                >Recommend me something!</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About section-->
    <div class="py-1 bg-light">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-10 col-xl-7">
            <div class="text-center">
              <h2 class="text-center text-uppercase fw-bolder">About me</h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon">
                  <i class="bi bi-hand-thumbs-up"></i>
                </div>
                <div class="divider-custom-line"></div>
              </div>
              <div class="fs-4 mb-4 fst-italic">
                {{ user.aboutMe }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getUserByDId } from "@/services/userService";
import { allowOrRedirectToHome } from "@/services/authService";
import { useStore } from "vuex";
import { getUserDIdFromRoute } from "./helpers";

export default defineComponent({
  setup() {
    allowOrRedirectToHome();
    const store = useStore();
    const user = ref();
    const userDId: string = getUserDIdFromRoute();
    (async () => {
      if (store.getters.getLoggedUser.dId !== userDId) {
        user.value = await getUserByDId(userDId);
      } else {
        user.value = store.getters.getLoggedUser;
      }
    })();
    return { user };
  },
});
</script>

<style scoped>
.masthead {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.masthead .masthead-heading {
  font-size: 2.75rem;
  line-height: 2.75rem;
}
.masthead .masthead-subheading {
  font-size: 1.25rem;
}
.masthead .masthead-avatar {
  width: 15rem;
}

@media (min-width: 992px) {
  .masthead {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .masthead .masthead-heading {
    font-size: 4rem;
    line-height: 3.5rem;
  }
  .masthead .masthead-subheading {
    font-size: 1.5rem;
  }

  .divider-custom {
    margin: 1.25rem 0 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divider-custom .divider-custom-line {
    width: 100%;
    max-width: 7rem;
    height: 0.25rem;
    background-color: #2c3e50;
    border-radius: 1rem;
    border-color: #2c3e50;
  }
  .divider-custom .divider-custom-line:first-child {
    margin-right: 1rem;
  }
  .divider-custom .divider-custom-line:last-child {
    margin-left: 1rem;
  }
  .divider-custom .divider-custom-icon {
    color: #2c3e50;
    font-size: 2rem;
  }
  .divider-custom.divider-light .divider-custom-line {
    background-color: #fff;
  }
  .divider-custom.divider-light .divider-custom-icon {
    color: #fff;
  }
}
</style>
