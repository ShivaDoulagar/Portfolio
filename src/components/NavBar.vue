<script setup>
import { ref, onMounted } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

onMounted(() => {
  document.body.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.body.setAttribute('data-bs-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}
</script>


<template>
  <nav class="overflow-visible" >
    <div class="navbar w-100 d-flex justify-content-around align-items-center text-light">
      <div class="nav_heading">
        <h1 data-aos="fade-right">Shiva Doulagar</h1>
        <div class="theme_mobile">
          <button @click="toggleTheme" value="dark" class="ps-3 toggle-btn  " data-aos="fade-down" data-aos-delay="100"
            href="#"><i :class="theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
          </button>
        </div>
      </div>
      <div class="right">
        <div class="navbar gap-4 d-flex justify-content-center align-items-center">
          <a class="" data-aos="fade-down" data-aos-delay="100" href="#Home">Home</a>
          <a class="" data-aos="fade-down" data-aos-delay="200" href="#about_me">About me</a>
          <a class="" data-aos="fade-down" data-aos-delay="300" href="#projects">Projects</a>
          <a class="" data-aos="fade-down" data-aos-delay="500" href="#contact_me">Contact me</a>
          <button @click="toggleTheme" value="dark" class="ps-3 toggle-btn  " data-aos="fade-down" data-aos-delay="600"
            href="#">
            <i :class="theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.theme_mobile{
  display: none;
}

.toggle-btn {
  background-color: transparent;
  border: none;
  color: var(--text-primary) ;
}

nav {
  background-color: transparent;
  /* border-bottom: #b3b3b3; */
  width: 100vw;
  /* height: 1vh; */
  /* z-index: 3; */
  overflow-x: hidden;
  z-index: 1;
}



.navbar {
  background: transparent !important;
  position: relative;
  top: 0;
  z-index: 2;
}

h1 {
  color: #fe4a2b;
}

a {
  position: relative;
  text-decoration: underline;
  color: var(--text-primary);
  padding: 4px 0;
  background: linear-gradient(to left,
      var(--nav-link) 50%,
      var(--accent) 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  /* text-shadow: 0 0 30px #8a2513a5; */
}

a:hover {background-position: left bottom;
  text-shadow: 0 0 40px #fe4a2b;
  list-style: underline;
  transform: scale(1.1);
  transition: linear 0.2s;
}

@media (max-width: 768px) {
  .right {
    display: none;
  }
  .theme_mobile {
    display:block;
  }
  .nav_heading {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-left: 20px;
  }

  .navbar {
    justify-content: start !important;
    /* max-height: 8vh; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

