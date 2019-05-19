import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue';
import Products from './views/products/products.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    }
  ]
})
