import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
createApp(App).use(store).use(router).mount('#app')
Vue.use(VueRouter);
Vue.use(VueAxios, axios)



