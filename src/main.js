import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'


import App from './App.vue'
import router from './router'


import axios, { all } from 'axios'
import VueAxios from 'vue-axios'


/* import the fontawesome core */
import '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import '@fortawesome/vue-fontawesome'

/* import specific icons */
import  '@fortawesome/free-solid-svg-icons'
import  '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */





const app = createApp(App)

app.use(FontAwesomeIcon)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)


app.mount('#app')
