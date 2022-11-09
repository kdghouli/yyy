
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios";

export const useCamionStore = defineStore("camion", {
    state: () => ({
        camion: [],
    }),
    getters: {
      getCamions(state){
          return state.camion
        }
    },
    actions: {
      async fetchCamions() {
        try {
          const data = await axios.get('http://localhost:3000/camion');
            this.camion = data.data;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})