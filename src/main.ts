import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "@/plugins/font-awesome";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
