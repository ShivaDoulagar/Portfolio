<script setup>
defineProps({
  title: String,
  subtitle: String,
  dateRange: String,
  description: String,
  image: String,
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
  }
})
</script>

<template>
  <div class="timeline-item" :class="`timeline-${position}`">
    <div class="timeline-card  d-flex" :data-aos="position === 'right' ? 'fade-up-left' : 'fade-up-right'">
      <div class="left">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-date">{{ dateRange }}</p>
        <p class="card-subtitle" v-if="subtitle">{{ subtitle }}</p>
        <p class="card-description me-2">{{ description }}</p>
      </div>
      <div class="logo d-flex justify-conent-center align-items-center">
        <img class="logo remove-bg" :src="image" alt="logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 80%;
}



.timeline-item {
  display: flex;
  margin-bottom: 60px;
  position: relative;
}

.timeline-left {
  justify-content: flex-start;
  padding-right: 50%;
}

.timeline-right {
  justify-content: flex-end;
  padding-left: 50%;
}

.timeline-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #FE4A2B;
  border-radius: 12px;
  padding: 20px;
  max-width: 500px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.timeline-card:hover {
  border-color: #FE4A2B;
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px #FE4A2B;
}

.card-title {
  color: #FE4A2B;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.card-date {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 12px;
}

.card-subtitle {
  color: var(--text-secondary);
  font-size: 0.75rem;
  margin-bottom: 12px;
  font-weight: 500;
}

.card-description {
  color:var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {

  .timeline-left,
  .timeline-right {
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
  }

  .timeline-card {
    max-width: 100%;
  }
}
</style>
