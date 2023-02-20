<template>
  <div class="w-75">
    <h1 class="p-5">VhlOne d'agence</h1>

    <div class="p-1 bg-info">
      <h3 class="bg-success text-white fw-bolder p-2 text-center">
        {{ vhl.matricule }}
      </h3>

      <p>
        Matricule :
        <span class="fw-bolder text-bg-success p-1 mx-2">{{ vhl.matricule }}</span>
      </p>
      <p>Marque : {{ vhl.marque }}</p>
      <p>Affectation : {{ vhl.agenceId }}</p>

      <p>DMC : {{ vhl.dmc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vhl: "",
      agenceName: "",
      comments: {},
    };
  },

  methods: {},

  async mounted() {
    const d = await this.axios.get(
      `http://localhost:3000/scooters?matricule=${this.$route.params.id}`
    );

    this.vhl = d.data[0];

    //this.agenceName=this.vhl.agence.agence
    //this.comments=this.vhl.comments
    console.log(this.vhl);
  },
};
</script>
