import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue'
import UpdateView from '../views/UpdateView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { path:'/create' ,name : 'create' ,component:CreateView},
    { path:'/detail/:id' ,name : 'detail' ,component:DetailView},
    { path:'/update/:id' ,name : 'update' ,component:UpdateView}
  ]
})

export default router
