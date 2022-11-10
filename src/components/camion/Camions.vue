
<template>
    
  <input type="text" v-model="agence">
  <h4>{{getCamions(agence)}}</h4>
    <table class="table table-sm table-striped table-primary table-hover caption-top">
      <caption>List of Camions</caption>
  <thead class="table-dark" >
    <tr>
      <th scope="col">#</th>
      <th scope="col">Matricule</th>
      <th scope="col">Marque</th>
      <th scope="col">Intitule</th>
      <th scope="col">Agence</th>
      <th scope="col">DMC</th>
    </tr>
  </thead>
  <tbody v-for="camion in camions" :key="camion.id "> 
    <tr>
      <th scope="row">{{ camion.id }}</th>
      <td>{{ camion.matricule }}</td>
      <td>{{ camion.marque }}</td>
      <td>{{ camion.intitule }}</td>
      <td>{{ camion.agenceId }}</td>
      <td>{{ camion.date }}</td>
    </tr>  
  </tbody>
</table>


  
</template>

<script>

import { useCamionStore } from "../../stores/camions.js";
 

export default{
 
    data(){
        return{
          store : useCamionStore(),
          agence:0 

        }
    },
    computed:{
      getCamions(){
       return this.store.getCamions;
      },
      camions(){
        return this.store.camion;
      }

    },
    mounted(){
      this.store.fetchCamions();
       // this.getCamions()
  },
  methods:{

    // getCamions() {

    //     this.axios
    //   .get('http://localhost:3000/camion')
    //   .then(response => (this.camions = response.data))}
    

  }

    }






</script>
