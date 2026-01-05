<script setup>
import { ref, onMounted } from 'vue'

const skills = [
  { name: 'HTML', icon: new URL('../assets/html.png', import.meta.url).href },
  { name: 'CSS', icon: new URL('../assets/css.png', import.meta.url).href },
  { name: 'JavaScript', icon: new URL('../assets/js.png', import.meta.url).href },
  { name: 'java', icon: new URL('../assets/java.png', import.meta.url).href },
  { name: 'vue', icon: new URL('../assets/vue.png', import.meta.url).href },
  { name: 'Git', icon: new URL('../assets/git.png', import.meta.url).href },
  { name: 'GitHub', icon: new URL('../assets/github.png', import.meta.url).href },
  { name: 'MYSQL', icon: new URL('../assets/mysql.png', import.meta.url).href },
  { name: 'Python', icon: new URL('../assets/python.png', import.meta.url).href },
  { name: 'Flask', icon: new URL('../assets/flask.png', import.meta.url).href },
  { name: 'Bash', icon: new URL('../assets/bash.png', import.meta.url).href },
  // add more here
]

// duplicate for infinite scroll
const duplicatedSkills = [...skills, ...skills]

const translateX = ref(0)
const speed = 0.5
let animationFrame

const track = ref(null)
const trackWidth = ref(0)

const animate = () => {
  translateX.value -= speed

  if (Math.abs(translateX.value) >= trackWidth.value / 2) {
    translateX.value = 0
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  trackWidth.value = track.value.scrollWidth
  animate()
})
</script>

<template>
  <div class="carousel">
    <div class="track" ref="track" :style="{ transform: `translateX(${translateX}px)` }">
      <div
        class="card d-flex justify-content-center align-items-center gap-2"
        v-for="(skill, index) in duplicatedSkills"
        :key="index"
      >
        <img :src="skill.icon" :alt="skill.name" />
        <span>{{ skill.name }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carousel {
  overflow: hidden;
  width: 100%;
  background: var(--inverted-bg);
  padding: 20px 0;
}

.track {
  display: flex;
  width: max-content;
}

.card {
  min-width: 140px;
  width: fit-content;
  margin: 0 12px;
  padding: 16px;
  background: #1a1a1a;
  color: white;
  border-radius: 12px;
  text-align: center;
}

.card img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 8px;
}
</style>
