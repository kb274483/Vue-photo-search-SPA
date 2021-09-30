import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchPage from '../views/SearchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    redirect:'/'
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/searchpage',
    name: 'SearchPage',
    component: SearchPage
  },

]

const router = new VueRouter({
  routes
})

export default router
