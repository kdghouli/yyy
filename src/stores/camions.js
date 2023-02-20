import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";

export const useCamionStore = defineStore("camions", {
  state: () => ({
    camions: [],
    
  }),
  getters: {
    getCamions(state) {
      return (age) => state.camions.filter((x) => x.agenceId == age).map((x)=>x.matricule)
    },
  },
  actions: {
    async fetchCamions() {
      try {
        const data = await axios.get("http://localhost:3000/camions");
        this.camions = data.data;
      } catch (error) {
        console.log(error)
      }
    },
  },
});
