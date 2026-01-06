<script setup>
let projects = [
  {
    name: 'JNTUH-SGPA Calculator using PDF',
    description:
      'We the students of JNTUH affilifated colleges when resuts of semisters are out used to calculate our SGPA manually as it is not mentioned or results. This overcomes the problem by just uploading result pdf file',
    icon: new URL('../assets/jntuh_sgpa.png', import.meta.url).href,
  },
  {
    name: 'Strenix: A fitness application',
    description:
      'Strenix is a web based fitness application built using flask. It is helpfull for users to perform exersise from anywhere and also keeps track of progress and diet plan.',
    icon: new URL('../assets/strenix.png', import.meta.url).href,
    address: 'https://github.com/ShivaDoulagar/Strenix--Gym_management_application.git',
  },
  {
    name: 'Quiz Master',
    description:
      'An academic project at IIT Madras developed using Flask to help students with academic quizzes and track their progress.',
    icon: new URL('../assets/quiz_master.png', import.meta.url).href,
    address: 'https://github.com/ShivaDoulagar/Quiz_app.git',
  },
  {
    name: 'Burger Restaurant',
    description: 'A static commercial website for a restaurant, built using HTML and CSS.',
    icon: new URL('../assets/burger.png', import.meta.url).href,
    address: 'https://shivadoulagar.github.io/Burger_site/',
  },
]
</script>

<template>
  <div data-aos="fade-up" class="overflow-x-hidden">
  <div class="projects d-flex flex-column justify-content-around align-items-center overflow-x-hidden">
    <h1>Projects</h1>
    <div class="cards-container d-flex gap-4 flex-fill flex-wrap justify-content-center mt-4">
      <div v-for="(project, index) in projects" class="card-wrapper" :key="index">
        <div class="card border shadow rounded-xl">
          <a :href="project.address" target="_blank">
            <div class="card-img-wrapper">
              <img :src="project.icon" class="card-img-top" alt="..." />
              <div class="card-overlay"></div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">
                {{ project.description }}
              </p>
              <div class="card-footer-accent"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.cards-container {
  width: 100%;
  padding: 0 2rem;
  align-items: stretch;
}

.card-wrapper {
  flex: 1 1 300px;
  max-width: 380px;
  min-width: 280px;
}




.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--background-card) !important;
  border: 1px solid var(--text-secondary) !important;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  border-radius: 20px !important;
}

.card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(254, 74, 43, 0.3), transparent 60deg);
  animation: rotate 6s linear infinite;
  opacity: 0;
  transition: opacity 0.5s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.card:hover::before {
  opacity: 1;
}

.card::after {
  content: '';
  position: absolute;
  inset: 2px;
  background: linear-gradient(145deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
  border-radius: 18px;
  z-index: 0;
}

/* @keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
} */

.card:hover {
  transform: translateY(-16px) rotateX(2deg);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 0 60px var(--accent),
    inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  border-color: var(--accent)!important;
}

.card a {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
}

.card a .card-title {
  color: var(--text-primary) !important;
}

.card a:hover .card-title {
  color: var(--accent);
  text-shadow: 0 0 20px rgba(254,74,43,0.5);
}

.card-img-wrapper {
  position: relative;
  overflow: hidden;
  background: #000;
  border-radius: 20px 20px 0 0;
}

.card-img-top {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.85) contrast(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0.6;
  transition: opacity 0.4s;
}

.card:hover .card-img-top {
  transform: scale(1.15) rotate(2deg);
  filter: brightness(1.1) contrast(1.2);
}

.card:hover .card-overlay {
  opacity: 0.3;
}

.card-body {
  background: var(--background-card);
  backdrop-filter: blur(20px);
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 0 0 20px 20px;
}

.card-title {
  color: var(text-primary);
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s;
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.3px;
}

.card:hover .card-title {
  color: #60a5fa;
  text-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
  transform: translateX(4px);
}

.card-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  transition: color 0.3s;
  flex: 1;
}

.card:hover .card-text {
  color: #e0e0e0;
}

.card-footer-accent {
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  margin-top: 1rem;
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover .card-footer-accent {
  transform: scaleX(1);
}

a {
  text-decoration: none !important;
}

/* Stagger animation on load */
.card-wrapper:nth-child(1) .card {
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}

.card-wrapper:nth-child(2) .card {
  animation: fadeInUp 0.6s ease-out 0.2s backwards;
}

.card-wrapper:nth-child(3) .card {
  animation: fadeInUp 0.6s ease-out 0.3s backwards;
}

.card-wrapper:nth-child(4) .card {
  animation: fadeInUp 0.6s ease-out 0.4s backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cards-container {
    padding: 0 1rem;
  }

  .card-wrapper {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
