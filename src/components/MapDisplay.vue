<template>
    <div id="map" style="width: 800px; height: 700px;"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI';

  const props = defineProps<{ address: string, city: string, country: string }>();
  
  // let fullAddress = props.address + ", " + props.city + ", " + props.country;
  let mapElement = ref<HTMLElement | null>(null);


  onMounted(async () => {
    await loadGoogleMapsAPI();

      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: props.address }, (results, status) => {
        if (status === "OK") {
          mapElement.value = document.getElementById("map");
          if (mapElement.value) {
            const map = new google.maps.Map(mapElement.value, {
              zoom: 15,
              center: results?.[0]?.geometry?.location || { lat: 0, lng: 0 },
            });
            new google.maps.Marker({
              map,
                position: results?.[0]?.geometry?.location || { lat: 0, lng: 0 },
            });
          } else {
            console.error("Map element not found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
  });

  </script>
  
