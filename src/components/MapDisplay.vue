<template>
    <div id="map" style="width: 800px; height: 700px;"></div>
  </template>
  
  <script setup lang="ts">
import { ref, onMounted } from 'vue';
  const props = defineProps<{ address: string, city: string, country: string }>();
  
  let fullAddress = props.address + ", " + props.city + ", " + props.country;
  let mapElement = ref<HTMLElement | null>(null);


  onMounted(async () => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: fullAddress }, (results, status) => {
        if (status === "OK") {
          mapElement.value = document.getElementById("map");
          if (mapElement.value) {
            const map = new google.maps.Map(mapElement.value, {
              zoom: 15,
              center: results[0].geometry.location,
            });
            new google.maps.Marker({
              map,
              position: results[0].geometry.location,
            });
          } else {
            console.error("Map element not found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    };
  });

  </script>
  
