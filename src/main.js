import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from '../src/plugins/vuetify.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify) // Usa Vuetify

app.mount('#app')
