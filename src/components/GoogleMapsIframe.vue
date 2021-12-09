<template>
  <!-- Google Maps section-->
  <section>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.1897112694305!2d11.064401815695884!3d49.462029979351264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f564cb272ce87%3A0xe97199ff9da839fe!2sKomeKome!5e0!3m2!1sen!2sde!4v1637784593297!5m2!1sen!2sde"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    mapsUrl: {
      type: String,
      defafult: "",
    },
  },
});
</script>
