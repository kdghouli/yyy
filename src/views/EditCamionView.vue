<template lang="">
  <div class="row">
    <div class="col-md-12 text-right">
      <router-link to="/" class="btn btn-primary">Back to List</router-link>
    </div>
  </div>
  <div class="row my-4">
    <div class="col-md-6 mx-auto">
      <h1 class="my-2">Edit Camion</h1>
      <form @submit.prevent="editCamion">
        <div class="form-group">
          <label for="Matricule">Matricule</label>
          <input
            v-model="camion.matricule"
            id="Matricule"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="Marque">Marque</label>
          <input
            v-model="camion.marque"
            id="Marque"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="agenceId">Agence</label>
          <input
            v-model="camion.agenceId"
            id="agenceId"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="date">DMC</label>
          <input
            v-model="camion.date"
            id="date"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="intitule">Intitule</label>
          <input
            v-model="camion.intitule"
            id="intitule"
            type="text"
            class="form-control"
          />
        </div>
        <div class="form-check">
          <label for="active">Active</label>
          <input
            v-model="camion.active"
            id="active"
            type="checkbox"
            value="true"
            class="form-check-label"
          />
        </div>
        <div class="form-group">
          <label for="etat">Etat</label>
          <input
            v-model="camion.etat"
            id="etat"
            type="text"
            class="form-control"
          />
        </div>
        <button class="btn btn-block btn-warning">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: `http://localhost:3000/vhls/${this.$route.params.id}`,
      camion: {
        matricule: "",
        marque: "",
        agenceId: "",
        date: "",
        intitule: "",
        active: "",
        etat: "",
      },
    };
  },
  methods: {
    editCamion() {
      if (this.camion.matricule == "" || this.camion.marque == "") {
        return;
      }

      fetch(this.url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.camion),
      })
        .then((res) => res.json())
        .then((data) => this.$router.go("-1"))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => (this.camion = data))
      .catch((err) => console.log(err));
  },
};
</script>
