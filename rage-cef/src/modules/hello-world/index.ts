import '../../assets/main.css';

import { createApp } from 'vue';
// import { createPinia } from 'pinia'
import HelloWorldView from './views/HelloWorldView.vue';

const app = createApp(HelloWorldView);

// app.use(createPinia())

app.mount('#app');
