<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Site Official</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/acc">Accidents</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/create">Creation </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/agence">Agences</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model=base.searchText
          />
          <router-link class="btn btn-outline-success" to="/search">Search</router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { useBasesStore } from "../../stores/bases.js";
export default {
  data() {
    return {
      base: useBasesStore(),
      
      
    }
  },
    computed:{
          // lineSearch() {
          //      return this.searchInput =this.base.searchText
          // },
    }}
  

</script>
