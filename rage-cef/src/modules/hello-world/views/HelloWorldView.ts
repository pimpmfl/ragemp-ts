import '../../../assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import HelloWorldView from './HelloWorldView.vue'

const app = createApp(HelloWorldView)

// app.use(createPinia())

app.mount('#app')
