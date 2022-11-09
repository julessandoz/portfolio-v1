import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueWebpImage from 'vue-webp-image';

const app = createApp(App);
app.use(VueWebpImage);
app.mount('#app')
