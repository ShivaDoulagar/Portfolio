import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
// import 'primevue/resources/primevue.min.css'

import { Button } from 'primevue';

// import Card from 'primevue';

import Carousel from 'primevue/carousel';



const app = createApp(App)

app.use(router)
app.use(PrimeVue,{
  theme:{
    preset:Aura
  }
})

app.component('Button',Button)
app.component('Carousel',Carousel)
// app.component('Card',Card)

app.mount('#app')
