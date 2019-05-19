import express from 'express';
const routes = express();
import ProductController from '../src/controllers/product-controller/ProductController';

routes.get('/',ProductController.fetchProducts);
routes.get('/:id', ProductController.fetchAllProductsById);

module.exports = routes;