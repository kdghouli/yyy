import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Accidents from "../components/Accidents.vue";
import Create from "../views/CreateView.vue";
import Test from "../views/Test.vue";
import CamionView from "../components/CamionView.vue";
import VoitureView from "../components/VoitureView.vue";
import ChariotView from "../components/ChariotView.vue";
import ScooterView from "../components/ScooterView.vue";
import AgenceView from "../views/AgenceView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/acc",
      name: "accidents",
      component: Accidents,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    ,
    {
      path: "/test",
      name: "test",
      component: Test,
    }  ,
    {
      path: "/:id",
      name: "CamionView",
      component: CamionView,
    }  ,
    {
      path: "/chariots/:id",
      name: "ChariotView",
      component: ChariotView,
    },{
      path: "/scooters/:id",
      name: "ScooterView",
      component: ScooterView,
    },{
      path: "/:id",
      name: "VoitureView",
      component: VoitureView,
    },
    {
      path: "/agence",
      name: "AgenceView",
      component: AgenceView,
    }
  ],
});

export default router;
