import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/css/style.scss'
import router from './router'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import Confirm from './components/confirm.vue'
import ConfirmDelete from './components/confirm_delete.vue'
import 'vue3-easy-data-table/dist/style.css'
import 'material-icons/iconfont/material-icons.css';
import "@/assets/css/tableStyle.scss";

const pinia = createPinia();

let app = createApp(App);
app.use(pinia);
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.component('Confirm', Confirm);
app.component('ConfirmDel', ConfirmDelete);
app.mount('#app')
