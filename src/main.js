import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueWebpImage from 'vue-webp-image';

function swapSource() {
    const images = document.querySelectorAll("img[src^='./']");
    images.forEach((image) => {
      image.src = image.src.replace("./", "src/");
    });
  }

const app = createApp(App);
app.use(VueWebpImage);
app.mount('#app')
