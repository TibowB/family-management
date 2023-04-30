import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import router from './router';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/src/service-worker.js');
  console.log('Service worker registered !');
}

createApp(App).use(router).mount('#app');
