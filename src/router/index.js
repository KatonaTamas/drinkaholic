import { createRouter, createWebHistory } from 'vue-router';
import AllBeers from '../views/AllBeers.vue';
import SearchArea from '../views/SearchArea.vue';

const routes = [
  {
    path: '/',
    name: 'SearchArea',
    component: SearchArea
  },
  {
    path: '/all',
    name: 'AllBeers',
    component: AllBeers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
