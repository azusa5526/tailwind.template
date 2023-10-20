import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@/styles/style.css';
import 'gridstack/dist/gridstack.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
