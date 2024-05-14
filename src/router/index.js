import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CartPage from "@/views/CartPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import ProductPage from "@/views/ProductPage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductPage
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'not found',
    component: NotFoundPage
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {top: 0}
  }
})

export default router
