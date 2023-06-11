declare global {
  interface Window { initMap?: () => void; }
}

export function loadGoogleMapsAPI() {
  return new Promise<void>((resolve, reject) => {
    // Check if the Google Maps API has already been loaded
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // Define the callback function
    window.initMap = () => {
      resolve();
      delete window.initMap; // Clean up the callback after it's used
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error('Failed to load the Google Maps API'));
    document.body.appendChild(script);
  });
}
