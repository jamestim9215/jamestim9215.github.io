import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { state, createStore } from '@/store/store' 

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCartShopping,
    faUser,
    faMagnifyingGlass,
    faFilter,
    faAngleLeft,
    faAngleRight,
    faCaretDown,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

library.add(faCartShopping, faUser, faMagnifyingGlass, faFilter, faAngleLeft,faAngleRight,faCaretDown,faXmark)

createApp(App)
    .provide(state, createStore())
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueSplide)
    .mount('#app')
