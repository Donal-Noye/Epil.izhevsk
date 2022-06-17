import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/main.scss'

createApp(App)
  .component('app-icon', require('./components/UI/AppIcon').default)
  .use(router)
  .mount('#app')
