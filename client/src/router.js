import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './views/Index.vue';
import ProductsSearch from './views/products/Products.vue';
import ProductDetail from './views/products/ProductDetails.vue';
import AddProduct from './views/products/AddProduct.vue';
import Error from './views/errors/404.vue';
import Admin from './views/admin/Index.vue';
import EditProduct from './views/products/EditProduct.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      /**
       * Home page
       */
      path: '/',
      name: 'Home',
      component: LandingPage
    },
    {
      /**
       * /Product for the front-end search page
       */
        path: '/products',
        name: 'Products',
        component: ProductsSearch,
    },
    {
      /**
       * Show the product details in the front-end
       */
      path : '/product/:id',
      name : 'Product Detail',
      component : ProductDetail
    },
    {
      /**
       * The admin page to access products
       */
      path : '/admin',
      name : 'Admin',
      component : Admin 
    },
    {
      /**
       * Add a new product as an admin
       */
      path : '/admin/product/add',
      name : 'Add Product',
      component : AddProduct 
    },    
    {
      /**
       * Edit a product as an admin
       */
      path : '/admin/product/edit/:id',
      name : 'Edit Product',
      component : EditProduct 
    }
  ]
})
