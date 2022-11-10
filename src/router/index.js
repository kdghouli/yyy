import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Accidents from '../components/Accidents.vue'
import Create from '../views/CreateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
       {
      path: '/acc',
      name: 'accidents',
      component:Accidents
    },
    {
   path: '/create',
   name: 'create',
   component:Create
 }
  ]
})

export default router
