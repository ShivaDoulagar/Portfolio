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
        <h3>I am a  <span class="typingEffect" style="color: #FE4A2B;">Web Developer</span></h3>
        <p>I'm currently pursuing my B.Tech in Computer Science Engineering at Bharat Instute of Engineering and
          technology, Hyderabad and Dual Degree from IIT Madras in the field of data science . <span class="extra-text"> I specialize in both
          frontend and backend development, transforming ideas into
          functional digital experiences using modern technologies.</span> </p>
        <div class="links d-flex gap-3 mt-4">
          <a href="https://www.linkedin.com/in/shiva-doulagar/" target="_blank" class="social_btn">
            <img class="social_icons"
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn">
          </a>
          <a href="https://github.com/shiva-doulagar" target="_blank" class="social_btn">
            <img  class="social_icons" src="https://imgs.search.brave.com/pWE8N2g7FjVPBFCWhJ29IzDciTJGvv28Kits--mkJew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ4LzIvZ2l0aHVi/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTQ4MDQ1/MC5wbmc"
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


.typingEffect {
    display: inline-block; /* ADD THIS LINE! */
    width: 0;
    overflow: hidden;
    max-width: fit-content;
    border-right: 2px solid white;
    /* Remove the font-size: 16px; line so it inherits from h3 */
    white-space: nowrap;
    animation: typing 5s steps(30) forwards, blink 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* Add the blinking cursor animation */
@keyframes blink {
  50% { border-color: transparent }
}

.firstpage {
  z-index: 5;
  overflow: hidden;
}

.links {
  display: flex;
  gap: 1rem;
}

p{
  font-size: 1.2rem;
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
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    /* justify-content: space-between; */
    align-items: center;
    /* background-color: gray !important; */
  }

  .extra-text{
    display: none;
  }

  .left {
    position: absolute;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .content{
    /* background-color: yellow; */
    /* padding: 0 -30px 0 -/30px; */
    width: 90vw;
    position: absolute;
    bottom:1px;
    justify-content: end;
  }

  h1  {
    font-size: 2.6em;
  }
  p{
    display: none;
  }

  h1, h3 ,p{
       margin: 0 -30px 0  -30px;
  }

  .links{
  margin: 0 -30px 0  -30px;
}

  .my_image {
    height: 50vh;
    margin-top: -300px;
  }

  .center {
    width: 100vw !important;
    /* height: 10vh; */
    background: blue;
  }
}
</style>
