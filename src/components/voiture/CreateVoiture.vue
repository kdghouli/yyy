<template>



<h3 class="my-2"> Creation d'un camion </h3>

<form @submit.prevent="ajouterEquipe()" class="row g-3 ">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Matricule</label>
    <input type="text" class="form-control" id="inputEmail4" v-model="matricule" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Marque</label>
    <input type="text" class="form-control" id="inputPassword4"  v-model="marque" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Intitule</label>
    <input
     type="text"
      class="form-control"
      id="inputAddress"
      placeholder="ECCBC Morrocco"
    />
  </div>

  <div class="col-md-6">
    <label for="inputCity" class="form-label">Agence</label>
    <input type="text" class="form-control" id="inputCity"  v-model="agenceId"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Type</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Equipement</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>

  <div class="col-8">
    <button class="btn btn-dark mx-auto">Sign in</button>
  </div>
</form>



</template>



<script>
export default {
data() {
return {
  matricule: "",
  marque:"",
  agenceId:""
};
},

methods: {
ajouterEquipe() {
  console.log("K");
    
      let camion = {
            matricule: this.matricule,
            marque: this.marque,
            agenceId:this.agenceId
        };
        
            fetch('http://localhost:3000/camion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(camion)
            })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err.message))

            console.log('ok')

},
},
};
</script>

<style></style>

