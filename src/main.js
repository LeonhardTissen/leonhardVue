import { createApp } from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import About from './About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
	{ path: '/about', component: About },
  ]
})

createApp(App).use(router).mount('#app')
