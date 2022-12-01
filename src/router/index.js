import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/swHome') 
  },
  {
    path: '/people',
    name: 'people',    
    component: () => import('../pages/swPeople')
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import('../pages/swPlanets')
  },
  {
    path: '/films',
    name: 'films',
    component: () => import('../pages/swFilms')
  },
  {
    path: '/species',
    name: 'species',
    component: () => import('../pages/swSpecies')
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component: () => import('../pages/swVehicles')
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../pages/swStarships')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
