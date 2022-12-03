import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCartShopping,
    faUser,
    faMagnifyingGlass,
    faFilter,
    faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

library.add(faCartShopping, faUser, faMagnifyingGlass, faFilter, faAngleLeft,faAngleRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueSplide)
    .mount('#app')
