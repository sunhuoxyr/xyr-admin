import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routers';
import App from './App.vue';
import './assets/scss/base.scss';

createApp(App).use(router).use(createPinia()).mount('#app');
