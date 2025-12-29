<script setup>
import AboutMe from './views/AboutMe.vue';
import HomeView from './views/HomeView.vue';
import ProjectsPage from './views/ProjectsPage.vue';


import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000, // animation time
    once: true,     // animation happens only once
  })
})
// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div>
    <HomeView></HomeView>
  </div>
  <div>
    <AboutMe></AboutMe>
  </div>
  <div>
    <ProjectsPage></ProjectsPage>
  </div>

</template>

<style>

</style>
