import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import demo from '../views/demo.vue'

Vue.use(VueRouter)

  const routes = [{
    path: '/demo',
    name: 'demo',
    component: demo
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DetaultRequest',
    name: 'DetaultRequest',
    component: () => import( "@/views/DetaultRequest")
  }
]

const router = new VueRouter({
  routes
})

export default router
