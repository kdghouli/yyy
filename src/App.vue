
<template>
  <header>
    <nav-bar/>
   

    
  </header>

 <div class="container-sm">

  <RouterView />

 </div>

  <!-- <Footer/> -->

</template>


<script>

import NavBar from './components/layout/NavBar.vue';
import Footer from './components/layout/Footer.vue';


export default {
  components:{NavBar,Footer},
}
</script>
