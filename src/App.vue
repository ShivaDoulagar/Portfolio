<script setup>
import AboutMe from './views/AboutMe.vue';
import HomeView from './views/HomeView.vue';
import ProjectsPage from './views/ProjectsPage.vue';
import ContactMe from './views/ContactMe.vue';



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
    <HomeView class="overflow-visible"></HomeView>
  </div>
  <div>
    <AboutMe></AboutMe>
  </div>
  <div>
    <ProjectsPage></ProjectsPage>
  </div>
  <div>
    <ContactMe></ContactMe>
  </div>

</template>

<style>

</style>
