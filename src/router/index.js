import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AddEstablishment from '../pages/AddEstablishment.vue'
import EditEstablishment from '../pages/EditEstablishment.vue'
import SignIn from '../pages/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Add Establishment',
    component: AddEstablishment
  },
  {
    path: '/admin/:establishmentId/edit',
    name: 'Edit Establishment',
    component: EditEstablishment
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
