<script setup>
import { ref } from 'vue'
import mail_icon from '../assets/mail.png';
import Phone from '../assets/phone.png';
import linkedin from '../assets/link.png';
import github from '../assets/github.png';


const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactMethods = [
  {
    icon: mail_icon,
    title: 'Email',
    value: 'doulagarshiva@gmail.com',
    link: 'mailto:doulagarshiva@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9491555572',
    link: ''
  },
  {
    icon: linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/ShivaDoulagar',
    link: 'www.linkedin.com/in/shiva-doulagar-95b494287'
  },
  {
    icon: github,
    title: 'GitHub',
    value: 'github.com/ShivaDoulagar',
    link: 'https://github.com/shivadoulagar'
  }
]

const handleSubmit = () => {
  // Create mailto link with form data
  const subject = encodeURIComponent(formData.value.subject)
  const body = encodeURIComponent(
    `Name: ${formData.value.name}\n` +
    `Email: ${formData.value.email}\n\n` +
    `Message:\n${formData.value.message}`
  )

  // Open default email client
  window.location.href = `mailto:doulagarshiva?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="contact_me">
  <div class="contact-page d-flex flex-column align-items-center">
    <div class="contact-header">
      <h1 class="contact-title">Get In Touch</h1>
      <p class="contact-subtitle">
        Have a question or want to work together? Feel free to reach out!
      </p>
    </div>

    <div class="contact-content d-flex flex-wrap gap-4 w-100 align-items-stretch">
      <!-- Contact Methods Cards -->
      <div class="contact-methods d-flex flex-column gap-3">
        <div v-for="(method, index) in contactMethods" :key="index" class="contact-method-card">
          <a :href="method.link" target="_blank" rel="noopener noreferrer">
            <div class="method-icon"><img class="img-fluid icon_add" :src="method.icon" alt="{{ method.title }}"></div>
            <div class="method-content">
              <h5 class="method-title">{{ method.title }}</h5>
              <p class="method-value">{{ method.value }}</p>
            </div>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-header">
            <h3>Send a Message</h3>
            <div class="header-accent"></div>
          </div>

          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Your Name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" placeholder="your.email@example.com" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="formData.subject" placeholder="What's this about?" required />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" placeholder="Your message here..." rows="5"
              required></textarea>
          </div>

          <button type="submit" class="submit-btn">
            <span>Send Message</span>
            <div class="btn-glow"></div>
          </button>
        </form>
      </div>
    </div>
  </div>
  </section>
</template>

<style scoped>
[data-bs-theme="dark"] .icon_add {
  filter: invert(50%);
}


.contact-page {
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInDown 0.8s ease-out;
}

.contact-title {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  letter-spacing: -1px;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

/* Contact Methods */
.contact-methods {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contact-method-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  animation: fadeInLeft 0.6s ease-out backwards;
}

.contact-method-card:nth-child(1) {
  animation-delay: 0.1s;
}

.contact-method-card:nth-child(2) {
  animation-delay: 0.2s;
}

.contact-method-card:nth-child(3) {
  animation-delay: 0.3s;
}

.contact-method-card:nth-child(4) {
  animation-delay: 0.4s;
}

.contact-method-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, var(--background-card) 0%, var(--inverted-bg) 100%);
  border: 1px solid rgba(254, 74, 43, 0.2);
  border-radius: 20px;
  transition: all 0.4s;
  z-index: 0;
}

.contact-method-card:hover::before {
  border-color: var(--accent);
  box-shadow: 0 10px 40px rgba(254, 74, 43, 0.3);
}

.contact-method-card a {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: transform 0.3s;
}

.contact-method-card:hover a {
  transform: translateX(8px);
}

.method-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(135deg, var(--accent), #ff6b4a); */
  border-radius: 15px;
  transition: transform 0.4s;
  /* box-shadow: 0 4px 15px rgba(254, 74, 43, 0.3); */
}

.contact-method-card:hover .method-icon {
  transform: scale(1.1) rotate(5deg);
}

.method-content {
  flex: 1;
}

.method-title {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.method-value {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

/* Contact Form */
.contact-form-wrapper {
  flex: 2;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: fadeInRight 0.6s ease-out 0.2s backwards;
}

.contact-form {
  background: linear-gradient(145deg, var(--background-card) 0%, var(--inverted-bg) 100%);
  border: 1px solid rgba(254, 74, 43, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-form::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg,
      transparent,
      rgba(254, 74, 43, 0.1),
      transparent 60deg);
  animation: rotate 8s linear infinite;
  opacity: 0;
  transition: opacity 0.5s;
}

.contact-form:hover::before {
  opacity: 1;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

.form-header {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.form-header h3 {
  color: var(--text-primary);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.header-accent {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, var(--accent), #ff6b4a);
  border-radius: 2px;
}

.form-group {
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.form-group label {
  display: block;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1.2rem;
  background: var(--inverted-bg);
  border: 2px solid transparent;
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(254, 74, 43, 0.1);
  transform: translateY(-2px);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
  flex: 1;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent), #ff6b4a);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  z-index: 1;
  margin-top: 1rem;
}

.submit-btn span {
  position: relative;
  z-index: 2;
}

.btn-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(254, 74, 43, 0.4);
}

.submit-btn:hover .btn-glow {
  transform: translateX(100%);
}

.submit-btn:active {
  transform: translateY(-1px);
}

/* Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .contact-content {
    flex-direction: column;
  }

  .contact-methods,
  .contact-form-wrapper {
    min-width: 100%;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 2rem 1rem;
  }

  .contact-title {
    font-size: 2.2rem;
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style>
