<script setup>
import FirstPage from '@/components/FirstPage.vue';
import Navbar from '@/components/NavBar.vue';


</script>


<template>
  <section id="Home">
    <div class="navbar w-100 overflow-x-hidden">
      <Navbar class="nav"></Navbar>
    </div>
    <div class="first overflow-x-hidden">
      <FirstPage></FirstPage>
    </div>
  </section>
</template>


<style scoped>
.navbar {
  background-color: transparent !important;
  z-index: 1 !important;
}

</style>
