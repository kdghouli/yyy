import { createApp } from 'vue';
import { createPinia } from 'pinia';
//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css';




import App from './App.vue'
import router from './router'


import axios, { all } from 'axios'
import VueAxios from 'vue-axios'




const app = createApp(App)


app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)


app.mount('#app')
