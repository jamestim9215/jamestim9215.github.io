
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'

const pinia = createPinia();

let app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
