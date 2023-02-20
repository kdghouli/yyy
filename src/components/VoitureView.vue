<template>
  <div class="w-75">
    <h1 class="p-5">VhlOne d'agence {{ agenceName }}</h1>

    <div class="p-1 bg-info">
      <h3 class="bg-success text-white fw-bolder p-2 text-center">
        {{ vhl.matricule }}
      </h3>
      
      <p>
        Matricule :
        <span class="fw-bolder text-bg-success p-1 mx-2">{{
          vhl.matricule
        }}</span>
      </p>
      <p>Marque : {{ vhl.marque }}</p>
      <p>Affectation : {{ vhl.agenceId }}</p>
      <p>Proprietaire : {{ vhl.intitule }}</p>
      <p>DMC : {{ vhl.date }}</p>
      <p >Chassis : {{ agenceName }}</p>
      <p v-for="comment in comments" :key="comment.index">Type : {{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vhl:{},
      agenceName:'',
      comments:{}
    };
  },

  methods: {
    Exit() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    const d = await this.axios.get(
      `http://localhost:3000/voitures/${this.$route.params.id}?_expand=agence&_embed=comments`
    );

    this.vhl = d.data;
    this.agenceName=this.vhl.agence.agence
    this.comments=this.vhl.comments
  },
};
</script>

<style>
div h1 {
  background-color: rgba(173, 173, 234, 0.377);
}
</style>
