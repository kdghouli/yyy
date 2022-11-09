import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)


app.mount('#app')
