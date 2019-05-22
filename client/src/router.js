import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue';
import Products from './views/products/products.vue';
import ProductDetail from './views/products/ProductDetails.vue';
import AddProduct from './views/products/AddProduct.vue';
import error from './views/errors/404.vue';

import admin from './views/admin/index.vue';

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
    },
    {
      path : '/product/:id',
      name : 'Product Detail',
      component : ProductDetail
    },
    {
      path : '/admin',
      name : 'Admin',
      component : admin 
    },
    {
      path : '/product/new/add',
      name : 'Add Product',
      component : AddProduct 
    },
    {
      path : '*',
      name : '404 Page',
      component : error 
    }
  ]
})
