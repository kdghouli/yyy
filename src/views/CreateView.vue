<template>

<h3>Merci de selectionner la categorie </h3>
    <select name="equipement" id="equipement" v-model=selected class="form-select mx-auto my-2">

        <option value="1">Camion</option>
        <option value="2">Voiture</option>
        <option value="3">Scooter</option>


    </select>
    
    <div v-if="selected == 1" class="my-5">
        <CreateCamion />
    </div>

    <div v-else-if="selected == 2" class="my-5">
        <CreateVoiture />

    </div>


</template>



<script>
import CreateCamion from '../components/camion/CreateCamion.vue';
import CreateVoiture from '../components/voiture/CreateVoiture.vue';

export default {
    components: { CreateVoiture, CreateCamion },
    data() {
        return {
            selected: 0
        }
    }



}
</script>

<style>

</style>

