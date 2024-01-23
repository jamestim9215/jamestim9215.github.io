import { createApp } from 'vue'
import '@/assets/css/style.scss'
import App from './App.vue'
import router from './router'

import 'material-icons/iconfont/material-icons.css';


let app = createApp(App);
app.use(router);
app.mount('#app')
