<template>
  <header>
    <nav-bar />
  </header>
  <div class="container">
    <div class="row justify-content-md-between">
      <div class="d-none d-md-flex col-xl-2">
        <SideBarView />
      </div>

      <div class="col-md-9">

        <!-- <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view> -->

        <router-view> </router-view>


      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
  import NavBar from "./components/layout/NavBar.vue";
  import Footer from "./components/layout/Footer.vue";
  import SideBarView from "./components/layout/SideBarView.vue";

  export default {
    components: { NavBar, Footer, SideBarView },
  };
</script>