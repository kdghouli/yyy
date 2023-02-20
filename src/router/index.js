import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Accidents from "../components/Accidents.vue";
import Create from "../views/CreateView.vue";
import EditCamionView from "../views/EditCamionView.vue";
import Test from "../views/Test.vue";
import CamionView from "../components/CamionView.vue";
import VoitureView from "../components/VoitureView.vue";
import ChariotView from "../components/ChariotView.vue";
import ScooterView from "../components/ScooterView.vue";
import AgenceView from "../views/AgenceView.vue";
import SearchView from "../views/SearchView.vue";



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
      path: "/edit/camion/:id",
      name: "EditCamionView",
      component: EditCamionView,
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
      path: "/camion/:id",
      name: "CamionView",
      component: CamionView,
    }  ,
    {
      path: "/chariot/:id",
      name: "ChariotView",
      component: ChariotView,
    },{
      path: "/scooter/:id",
      name: "ScooterView",
      component: ScooterView,
    },{
      path: "/voiture/:id",
      name: "VoitureView",
      component: VoitureView,
    },
    {
      path: "/agence",
      name: "AgenceView",
      component: AgenceView,
    },
    {
      path: "/search",
      name: "SearchView",
      component: SearchView,
      props:true
    }

  ],
});

export default router;
