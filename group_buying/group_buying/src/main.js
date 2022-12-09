import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { state, createStore } from '@/store/store' 

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { showLoading, hideLoading } from '@/common/common'
import {
    faCartShopping,
    faUser,
    faMagnifyingGlass,
    faFilter,
    faAngleLeft,
    faAngleRight,
    faCaretDown,
    faXmark,
    faFaceSadTear
} from '@fortawesome/free-solid-svg-icons'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

library.add(faCartShopping, faUser, faMagnifyingGlass, faFilter, faAngleLeft,faAngleRight,faCaretDown,faXmark,faFaceSadTear)

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
    showLoading()
    hideLoading();
});




// router.beforeEach((to, from, next) => {
//     console.log(`Navigating to: ${to.name}`);
//     showLoading();
//     setTimeout(() => {
//         console.log(`showLoading`);
        
//     },3000)
//     next();
// });

createApp(App)
    .provide(state, createStore())
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueSplide)
    .mount('#app')