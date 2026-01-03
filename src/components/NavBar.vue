<script setup></script>
<template>
  <nav class="overflow-x-hidden">
    <div class="navbar w-100 d-flex justify-content-around align-items-center text-light">
      <div class="nav_heading">
        <h1 data-aos="fade-right">Shiva Doulagar</h1>
      </div>
      <div class="right">
        <div class="navbar gap-4 d-flex justify-content-center align-items-center">
          <a class="" data-aos="fade-down" data-aos-delay="100" href="#Home">Home</a>
          <a class="" data-aos="fade-down" data-aos-delay="200" href="#about_me">About me</a>
          <a class="" data-aos="fade-down" data-aos-delay="300" href="#projects">Projects</a>
          <a class="" data-aos="fade-down" data-aos-delay="500" href="#">Contact me</a>
          <!-- <button @click="toggleTheme" value="dark" class="ps-3 toggle-btn  " data-aos="fade-down" data-aos-delay="600"
            href="#">
            <i :class="theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill'"></i>
          </button> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.toggle-btn {
  background-color: transparent;
  color: white;
  border: none;
}

nav {
  background-color: rgba(255, 255, 255, 0) !important;

  /* border-bottom: #b3b3b3; */
  width: 100vw;
  /* height: 1vh; */
  /* z-index: 3; */
  overflow-x: hidden;
  z-index: 1;
}

[data-bs-theme='light'] nav {
  background-color: white;
  color: black !important;
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
  color: white;
  text-decoration: underline;
  padding: 4px 0;
  background: linear-gradient(to left, white 50%, #fe4a2b 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
  transform: scale(1);
  transition:
    background-position 0.2s ease-in-out,
    transform 0.3s ease-in-out;
  font-size: 20px;
  text-shadow: 0 0 80px #fe4a2b;
}

a:hover {
  background-position: left bottom;
  text-shadow: 0 0 40px #fe4a2b;
  list-style: underline;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .right {
    display: none;
  }

  .nav_heading {
    display: flex;
    align-items: center;
    justify-content: start;
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
