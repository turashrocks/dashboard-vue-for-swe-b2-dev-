import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

import './assets/main.css'

axios.defaults.baseURL = 'https://swe-b2-dev.ebuilders.pro/api/';
// axios.defaults.baseURL = 'http://localhost:8080/api/';
axios.defaults.headers.common['Authorization']= `Bearer ${localStorage.getItem('token')}`;
axios.defaults.withCredentials = true;

createApp(App).use(store).use(router).mount('#app')
