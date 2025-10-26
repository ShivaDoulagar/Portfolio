<script setup>
import AboutMe from './views/AboutMe.vue';
import HomeView from './views/HomeView.vue';


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

</template>

<style>
:global([data-bs-theme="light"]) {
  background-color: white;
  color: black !important;
}

:global([data-bs-theme="dark"]) {
  background-color: black;
  color: white !important;
}

[data-bs-theme='light'] body {
  background-color: white;
  color: black !important;
}


[data-bs-theme='light'] nav {
  background-color: white;
  color: black !important;
}
</style>
