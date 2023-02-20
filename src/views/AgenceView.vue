<template>

  <h4>Liste des véhicules d'agence</h4>

  <select class="form-select" aria-label="Default select example" v-model="Selected" @click="filterMatricule">
    <option value="1">Marrakech</option>
    <option value="2" selected>Beni Mellal</option>
    <option value="3" >Essaouira</option>
    <option value="4">Safi</option>
    <option value="5" >Sidi Bennour</option>
    <option value="6">Khouribga</option>
    <option value="7">El Kelaa</option>
    <option value="9">Ouarzazate</option>
    <option value="10">Ain Harrouda</option>

  </select> 
   
<!-- Camions -->

<font-awesome-icon icon="fa-solid fa-user-secret" />
<font-awesome-icon icon="fa-regular fa-futbol" />
<font-awesome-icon icon="fa-solid fa-truck" />
<p class="pt-2">Nombre des <span class="fw-bolder"><span><i class="bi bi-truck text-success fs-4"></i></span> Camions: </span><span class="badge rounded-pill bg-success ms-1">{{ camionsMat.length }}</span> </p>

  <div class="row row-cols-lg-3 row-cols-md-2 ">
    
    <ul v-for="camion in camionsMat" class="list-group ">
    
      <li

        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-success mb-1 shadow-sm">
        <i class="bi bi-truck text-success fs-5 me-1"></i>
        <router-link class="text-decoration-none" :to="{name:'CamionView',params:{id:camion.id}}">{{ camion.matricule}} </router-link>
         <span class="fw-lighter ms-4 me-auto align-bottom" style="font-size: 9px">{{ camion.intitule }}</span> <span class="badge bg-success rounded-pill">5</span>
      </li>
    
    </ul>
  
  </div>
  <hr >

<!-- Voitures -->

<p class="pt-2">Nombre des <span class="fw-bolder"> Voitures: </span><span class="badge rounded-pill bg-primary ms-1">{{ voituresMat.length }}</span> </p>

<div class="row row-cols-lg-3 row-cols-md-2">
  <ul v-for="voiture in voituresMat" class="list-group">
  
    <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-primary mb-1 shadow-sm">
      <i class="bi bi-car-front-fill text-primary fs-5 me-1"></i>
      <router-link class="text-decoration-none" :to="{name:'VoitureView',params:{id:voiture.id}}">{{ voiture.matricule}}</router-link> <span class="fw-lighter ms-2" style="font-size: 9px">{{ voiture.type }}&nbsp;&nbsp;&nbsp;&nbsp;{{ voiture.conducteur }}</span> <span class="badge bg-primary rounded-pill">4</span>
    </li>
  
  </ul>
  </div>
  <hr>


<!-- Chariots -->


<p class="pt-2">Nombre des <span class="fw-bolder"><img class="me-1" src="./../../public/forklift.png" alt="" style="width: 30px;"/> Chariots </span> <span class="badge rounded-pill bg-warning ms-1">{{ chariotsMat.length }}</span> </p>

<div class="row row-cols-lg-3 row-cols-md-2">
  <ul v-for="chariot in chariotsMat" class="list-group">
  
    <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-warning mb-1 shadow-sm">
      <img class="me-1" src="./../../public/forklift.png" alt="" style="width: 22px;"/>
      <router-link class="text-decoration-none" :to="{name:'ChariotView',params:{id:chariot.matricule}}">{{ chariot.matricule}}</router-link> <span class="fw-lighter ms-4 me-auto align-bottom text-truncate" style="font-size: 9px">{{ chariot.marque }}</span><span class="badge bg-warning rounded-pill">12</span>
    </li>
  
  </ul>
  </div>
  <hr>

<!-- Scooters -->

<p class="pt-2">Nombre des <span class="fw-bolder"><img class="me-1" src="./../../public/scooter.png" alt="" style="width: 30px;"/> Scooters : </span><span class="badge rounded-pill bg-danger ms-1">{{ scootersMat.length }}</span> </p>

<div class="row row-cols-lg-3 row-cols-md-2">
  <ul v-for="scooter in scootersMat" class="list-group">
  
    <li
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-danger mb-1 shadow-sm">
      <img class="me-1" src="./../../public/scooter.png" alt="" style="width: 22px;"/>
      <router-link class="text-decoration-none" :to="{name:'ScooterView',params:{id:scooter.matricule}}">{{ scooter.matricule}}</router-link> <span class="fw-lighter ms-4 me-auto align-bottom text-truncate" style="font-size: 10px">{{ scooter.utilisateur }}</span><span class="badge bg-danger rounded-pill">15</span>
    </li>
  
  </ul>
  </div>


</template>

<script>
export default {
  data() {
    return {
      db: {},
      camionsMat: {},
      voituresMat: {},
      scootersMat: {},
      chariotsMat: {},
      Selected: Math.floor(Math.random() * 11),
      
    };
  },
  methods: {
    // selectAgence() {
    //   return (this.camionsMat = this.agences[this.Selected].camions);
    // },

     


  },

  computed:{
    filterMatricule(){
        this.camionsMat=this.db.camions.filter(sel=>sel.agenceId==this.Selected)
        this.voituresMat=this.db.voitures.filter(sel=>sel.agenceId==this.Selected)
        this.chariotsMat=this.db.chariots.filter(sel=>sel.agenceId==this.Selected)
        this.scootersMat=this.db.scooters.filter(sel=>sel.agenceId==this.Selected)

          
      }

  },

  async mounted() {
    const d = await this.axios.get(
      // `http://localhost:3000/agences?_embed=camions`
      `http://localhost:3000/db`
    );

    this.db = d.data;
    this.filterMatricule
    
  },
};
</script>
<style>





</style>