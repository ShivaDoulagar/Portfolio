<script setup>
import CarousalComponent from '@/components/CarousalComponent.vue';
import ProjectCard from '@/components/ProjectCard.vue';


</script>

<template>
  <section id="projects">
    <div class="skills pb-3 d-flex justify-content-center align-items-center flex-column gap-3">
      <h1 class="mt-3">Skills</h1>
    <CarousalComponent></CarousalComponent>
    </div>
    <div class="projects">
        <ProjectCard></ProjectCard>
    </div>
  </section>
</template>

<style scoped>

#projects{
  box-sizing: border-box;
  width: 99vw;
  /* height: 100vh; */
}

</style>
