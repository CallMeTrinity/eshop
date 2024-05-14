import './assets/base.css'

import {createApp} from 'vue'
import App from './App.vue'

import VueFeather from 'vue-feather';

import router from "@/router";


const app = createApp(App);

app
  .component(VueFeather.name, VueFeather)
  .use(router)
  .mount('#app')
