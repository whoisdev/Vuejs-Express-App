import express from 'express';
const routes = express();
import ProductController from '../controllers/productController';

routes.get('/',ProductController.fetchProducts);
routes.get('/:id', ProductController.fetchAllProductsById);

module.exports = routes;