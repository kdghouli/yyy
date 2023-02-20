import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";


export const useBasesStore = defineStore("bases", {


  state: () => ({
    base:[],
    camions: [],
    voitures:[],
    scooters:[],
    chariots:[],
    agences:[],
    commentaires:[],
    status:[],
    searchText:'',
    listCamion:{}


    
  }),


  // ######################################################

  getters: {
    getMat(state) {
      return (age) => state.camions.filter((x) => x.agenceId == age).map((x)=>x.matricule)
    },

   
    



    getCamions(){
      return this.camions=this.base.camions
    },
    getVoitures(){
      return this.voitures=this.base.voitures
    },
    getScooters(){
      return this.scooters=this.base.scooters
    },
    getChariots(){
      return this.chariots=this.base.chariots
    },
    getcomments(){
      return this.commentaires=this.base.comments
    },
    getAgences(){
      return this.agences=this.base.agences
    },
    getStatus(){
      return this.status=this.base.status
    },
    async searchMatricule(){
      try{

        this.listCamion = await axios.get(`http://localhost:3000/vhls?q=${this.searchText}`);
        
        
        
        console.log(this.listCamion)
      }
     catch (err) {
      console.log(err);
    }
    }
  },


  // ######################################################

  actions: {
    async fetchBase() {
      try {
        console.log('fetchBase - BasesPinia')
        const data = await axios.get("http://localhost:3000/db");
        this.base = data.data;
        console.log(this.base)
      } catch (error) {
        console.log(error);
      }
    },

    
      
     },
    
              

    
  
});
