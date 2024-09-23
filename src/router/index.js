import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import Detail from '../components/Detail.vue'; 

const routes = [
  { path: '/', component: HomeView }, 
  { path: '/about', component: AboutView },  
  { path: '/contact', component: ContactView }, 
  { path: '/detail', component: Detail, props: true } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router
