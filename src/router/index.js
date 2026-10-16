import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes=[
  {
    path: '/',    
    name:'home',
    component:HomeView
  },
  { 
    path:'/post/:id', 
    name:'post',
    component:()=>import('../views/PostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
