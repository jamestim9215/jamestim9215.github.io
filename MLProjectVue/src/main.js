import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'material-icons/iconfont/material-icons.css';
import './style.css'
import Confirm from '@/components/common/hq_confirm.vue'
import ConfirmDel from '@/components/common/hq_confirm_delete_check.vue'

let app = createApp(App);
app.use(router);
app.component('HQConfirm', Confirm);
app.component('HQConfirmDel', ConfirmDel);
app.mount('#app');
