
<template>
    

<table class="table table-sm table-striped table-success table-hover caption-top">
  <caption>List of Voitures</caption>
  <thead class="table-dark" >
    <tr>
      <th >#</th>
      <th >Marque</th>
      <th >Conducteur</th>
      
    </tr>
  </thead>
  <tbody v-for="voiture in Voitures" :key="voiture.id "> 
    <tr>
      
      <td>{{ voiture.matricule }}</td>
      <td>{{ voiture.marque }}</td>
      <td>{{ voiture.conducteur }}</td>
     
    </tr>  
  </tbody>
</table>


  
</template>

<script>

export default{
 
    data(){
        return{
          Voitures:{},

        }
    },
    mounted(){

        this.getVoitures()
  },
  methods:{

    getVoitures() {

        this.axios
      .get('http://localhost:3000/Voitures')
      .then(response => (this.Voitures = response.data))}
    

  }

    }






</script>
