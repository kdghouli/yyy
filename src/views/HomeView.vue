<script >
import Camions from "../components/camion/Camions.vue"
import Voitures from "../components/voiture/Voitures.vue"


export default {
  components: { Camions,Voitures },
}

</script>

 

<template>

 
  
<div class="row">
  <div class="col-5"><Camions/></div>
  <div class="col-1"></div>

  <div class="col-5"><Voitures/></div>
</div>

 
    
    

 
</template>

 
 
 


<style>
main{
  background-color: hsla(160, 100%, 37%, 0.2);
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 50px;
  padding: 50px;
  text-align:center;
  text-shadow: 40px;
  align-content: center;
}



</style>
