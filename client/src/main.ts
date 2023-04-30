import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/src/service-worker.js');
}

createApp(App).use(router).mount('#app');
