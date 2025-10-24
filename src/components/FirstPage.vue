<script setup>

</script>

<template>
  <div class="text-light d-flex ">
    <div class="left d-flex justify-content-center align-items-center">
      <div class="image d-flex justify-content-center align-items-center">
        <img class="my_image" src="../assets/img.png" alt="My Image">
      </div>
    </div>
    <div class="right  text-light w-40 d-flex justify-content-center align-items-center ">
      <!-- <img src="../assets/img.png" alt=""> -->
      <div class="content p-5">
        <h1>Hi it's <span style="color: #FE4A2B;"> Shiva Doulagar</span></h1>
        <h3>I am a <span style="color: #FE4A2B;">Web Developer</span></h3>
        <p>Current student looking to join the workforce to gain real-world experience. Ability to complete tasks on
          time
          in both individual and team settings. Dependable and reliable. Ready to learn and grow with your company,
          which also helps me to gain experience. </p>
        <div class="links d-flex gap-3 mt-4">
          <a href="https://www.linkedin.com/in/shiva-doulagar/" target="_blank" class="social_btn">
            <img class="social_icons"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn">
          </a>
          <a href="https://github.com/shiva-doulagar" target="_blank" class="social_btn">
            <img class="social_icons" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub">
          </a>
          <a href="https://www.instagram.com/shiva.doulagar/" target="_blank" class="social_btn">
            <img class="social_icons" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              alt="Instagram">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
* {
  box-sizing: border-box;
}

.links {
  display: flex;
  gap: 1rem;
}

.social_btn {
  width: 50px;
  filter: grayscale(100%);
  height: 50px;
  border-radius: 50%;
  border: 2px solid #FE4A2B;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease;
}

.social_btn:hover {
  background-color: #FE4A2B;
}

.social_icons {
  width: 60%;
  height: 60%;
  filter: invert(1);
  /* white icons by default */
  transition: all 0.3s ease;
}

.social_btn:hover .social_icons {
  filter: invert(0);
  /* colored on hover */
}


.left {
  width: 50vw;
  height: 90vh;
  /* background-color: gray; */
}



.image {
  /* background-color: aliceblue; */
  height: 40vh;

}

h1 {
  font-size: 4em;
}

.my_image {
  margin-top: -60px;
  height: 70vh;
  width: 70%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 100px #FE4A2B;
  filter: grayscale(0%);
  transition: 0.3s;
}

img:hover {
  filter: grayscale(100%);
}

.right {
  width: 50vw;
  height: 90vh;
  /* background-color: aliceblue; */
}
</style>
