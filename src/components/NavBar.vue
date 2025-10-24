<script setup>


</script>
<template>

  <nav>
    <div class="navbar w-100 d-flex justify-content-around align-items-center  text-light">
      <div class="nav_heading">
        <h1>Shiva Doulagar</h1>
      </div>
      <div class="right ">
        <div class="navbar gap-4 d-flex justify-content-center align-items-center">
          <a class=" " data-aos="fade-down" href="#">Home</a>
          <a class="" href="#">About me</a>
          <a class="" href="#">Projects</a>
          <a class="">Experience</a>
          <a class="">Contact me</a>
        </div>
      </div>
    </div>
  </nav>

</template>


<style scoped>
* {
  box-sizing: border-box;
}

nav {
  background-color: black;
  border-bottom: #b3b3b3;
  width: 100vw;
  height: 10vh;
}



h1 {
  color: #FE4A2B;

}

a {
  position: relative;
  color: white;
  text-decoration: none;
  padding: 4px 0;
  background: linear-gradient(to left, white 50%, #FE4A2B 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
  transition: background-position 0.2s ease-in-out;
  font-size: 20px;

}

a:hover {
  background-position: left bottom;
  text-shadow: horizontal-shadow vertical-shadow blur #FE4A2B;

}
</style>
