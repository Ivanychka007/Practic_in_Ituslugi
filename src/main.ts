import { createApp } from 'vue';
import YmapPlugin from 'vue-yandex-maps';
import App from "./App.vue";
import router from './router/router';
import store from './store/store';

createApp(App).use(router).use(store).use(YmapPlugin).mount("#app");