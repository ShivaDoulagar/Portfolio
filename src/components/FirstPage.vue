<script setup>

</script>

<template>
  <div class="text-light d-flex flex-wrap firstpage ">
    <div class="left d-flex justify-content-center align-items-center">
      <div class="image d-flex justify-content-center align-items-center">
        <img data-aos="fade-right" class="my_image" src="../assets/img.png" alt="My Image">
      </div>
    </div>
    <div class="center text-light"></div>
    <div data-aos="fade-left" class="right   text-light w-40 d-flex justify-content-center align-items-center ">
      <!-- <img src="../assets/img.png" alt=""> -->
      <div class="content p-5">
        <h1>Hi it's <span style="color: #FE4A2B;"> Shiva Doulagar</span></h1>
        <h3>I am a <span style="color: #FE4A2B;">Web Developer</span></h3>
        <p>I'm currently pursuing my B.Tech in Computer Science Engineering at Bharat Instute of Engineering and
          technology, Hyderabad and Dual Degree from IIT Madras in the field of data science . I specialize in both
          frontend and backend development, transforming ideas into
          functional digital experiences using modern technologies. </p>
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

.firstpage {
  z-index: 5;
  overflow: hidden;
}

.links {
  display: flex;
  gap: 1rem;
}



.social_btn {
  width: 50px;
  /* filter: grayscale(100%); */
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease;
}

.social_btn:hover {
  background-color: #FE4A2B;
  border: none
}

.social_icons {
  width: 60%;
  height: 60%;
  /* filter: invert(1); */
  /* white icons by default */
  transition: all 0.3s ease;
}

.social_btn:hover .social_icons {
  filter: invert(0);
  /* colored on hover */
}


.left {
  width: 49vw;
  height: 90vh;
  /* background-color: gray; */
}



.image {
  /* background-color: aliceblue; */
  height: 40vh;
  z-index: 5;

}

h1 {
  font-size: 5em;
}

.my_image {
  margin-top: -60px;
  height: 78vh;
  width: 70%;
  /* transform: scalex(-1); */
  ;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 50px #FE4A2B;
  filter: grayscale(0%);
  transition: 0.2s;
}

img:hover {
  filter: grayscale(100%);
}

.right {
  width: 50vw;
  height: 90vh;
  /* background-color: aliceblue; */
}


@media (max-width:768px) {
  .firstpage {
    position: relative;
  }

  .left {
    position: absolute;
    width: 100vw;
    display: flex;
    flex-direction: column;

    width: 100vw;

  }

  h1 {
    font-size: 2em;
  }

  .my_image {
    height: 60vh;
    margin-top: -180px;
  }

  .center {
    width: 100vw !important;
    height: 40vh;
    background: blue;
  }
}
</style>
