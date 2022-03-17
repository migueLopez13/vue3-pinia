import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '', component: Home },
  { path: '/about', component: About },
  { path: '/hello', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;