<script setup>
import TimelineCard from '@/components/TimelineCard.vue'
import bluestockslogo from '@/assets/bluestocks.png'
import aws from '@/assets/aws.png'
import biet from '@/assets/biet.png'
import iitm from '@/assets/iitm.png'

const journeyItems = [
  {
    title: 'Internship at @Bluestocks',
    dateRange: 'February 2025 - March 2025',
    description: 'Worked as a software development intern focusing on front-end development.',
    position: 'right',
    image: bluestockslogo,
  },
  {
    title: 'AWS Forage ',
    dateRange: 'August 2025',
    description:
      'Completed the Solutions Architecture Job Simulation on August 5th, 2025, gaining hands-on experience in designing scalable and efficient system solutions.',
    position: 'left',
    image: aws,
  },
  {
    title: 'B.Tech – Computer Science (BIET)',
    subtitle: 'Bharat Institute of Engineering and Technology, Hyderabad (2022 - 2026)',
    dateRange: '2022 - 2026',
    description:
      'Focused on full-stack development, AI projects, and cloud computing technologies.',
    position: 'right',
    image: biet,
  },
  {
    title: ' Dual Degree – Data Science (IIT Madras)',
    subtitle: 'Indian Institute of Technology Madras (2022 - 2026)',
    dateRange: '2022 - ongoing',
    description: 'Built an early interest in coding, building basic web applications and projects.',
    position: 'left',
    image: iitm,
  },
]
</script>

<template>
  <section id="about_me">
    <div class="about_me text-light">
      <div class="content">
        <h1 class="main-title">My Journey</h1>

        <div class="timeline-container">
          <div class="timeline-line"></div>

          <TimelineCard
            v-for="(item, index) in journeyItems"
            :key="index"
            :title="item.title"
            :subtitle="item.subtitle"
            :date-range="item.dateRange"
            :description="item.description"
            :image="item.image"
            :position="item.position"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about_me {
  width: 98vw;
  position: relative;
}

.about_me {
  position: relative;
  z-index: 10;
  padding: 80px 20px;
  width: 100%;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.main-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #fe4a2b;
  margin-bottom: 80px;
  /* text-shadow: 0 0 20px rgba(74, 222, 128, 0.5); */
}

.timeline-container {
  position: relative;
  padding: 40px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #fe4a2b, #fe4a2b, transparent);
  transform: translateX(-50%);
}

.timeline-line::before,
.timeline-line::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: #fe4a2b;
  border-radius: 50%;
  box-shadow: 0 0 20px #fe4a2b;
}

.timeline-line::before {
  top: 0;
}

.timeline-line::after {
  bottom: 0;
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .timeline-line {
    left: 20px;
  }

  .about_me {
    padding: 60px 15px;
  }
}
</style>
