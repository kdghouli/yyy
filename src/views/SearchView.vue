<template>
  <div class="">

  <h1>SEARCH VIEW</h1>

  <h4>{{ base.searchText }}</h4>
  <h4>{{ chercher }}</h4>

  <!-- Camions -->

  <p class="pt-2">
    Nombre des
    <span class="fw-bolder">
      <span><i class="bi bi-truck text-success fs-4"></i></span> Camions: </span>
      <span class="badge rounded-pill bg-success ms-1">{{ camionsMat.length }}</span>
  </p>

  <div class="row row-cols-lg-3 row-cols-md-2">
    <ul v-for="camion in camionsMat" class="list-group" :key="camion">
      <li
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-success mb-1 shadow-sm"
      >
        <i class="bi bi-truck fs-5 me-1"></i>
        <router-link
          class="text-decoration-none"
          :to="{ name: 'CamionView', params: { id: camion.id } }"
          >{{ camion.matricule }}
        </router-link>
        <span class="fw-lighter ms-4 me-auto align-bottom" style="font-size: 9px">{{
          camion.intitule||camion.conducteur
        }}</span>
        <span class="badge bg-success rounded-pill"></span>
      </li>
    </ul>
  </div>
  </div>
  
</template>

<script>
import { useBasesStore } from "../stores/bases.js";
export default {
  data() {
    return {
      base: useBasesStore(),
      db: {},
      camionsMat: {},
      voituresMat: {},
      scootersMat: {},
      chariotsMat: {},
      CommentsDb: {},
    };
  },
  methods: {
   
    // selectAgence() {
    //   return (this.camionsMat = this.agences[this.Selected].camions);
    // },
  },

  computed: {
     chercher:function(){
      if( !this.base.searchText ==''){
        this.base.searchMatricule;
        console.log('chercher SearchView !!!!')
        this.camionsMat = this.base.listCamion.data

      }else{
        console.log("5awya")
      }
      
        
      
    }
    // oldSearchMatricule() {
    //   this.camionsMat = this.db.camions.filter((sel) => sel.agenceId == this.search);
    //   this.voituresMat = this.db.voitures.filter((sel) => sel.agenceId == this.search);
    //   this.chariotsMat = this.db.chariots.filter((sel) => sel.agenceId == this.search);
    //   this.scootersMat = this.db.scooters.filter((sel) => sel.agenceId == this.search);
    //   this.CommentsDb = this.db.comments;
    // },
    

  },

  // async searchCamions(){

  //   const trouve = await this.axios.get(
  //     `http://localhost:3000/camions?q=56`
  //   );
  //   this.cherche = trouve;
  //   console.log(this.cherche)
  // },

  // async mounted() {
  //   const d = await this.axios.get(
  //     // `http://localhost:3000/agences?_embed=camions`
  //     `http://localhost:3000/db`
  //   );

  //   this.db = d.data;
  //   this.searchMatricule;
  // },
};
</script>
