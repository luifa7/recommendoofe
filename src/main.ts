import { createApp } from "vue";
import App from "./App.vue";
import Footer from "./Footer.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/css/styles.css";

const pinia = createPinia();
createApp(App).use(pinia).use(router).mount("#app");
createApp(Footer).mount("#footer");
