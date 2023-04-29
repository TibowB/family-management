import { createApp } from 'vue';
import './index.css';
import App from './App.vue';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/src/service-worker.js');
  console.log('Service worker registered !');
}

createApp(App).mount('#app');
