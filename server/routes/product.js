import express from 'express';
const routes = express();
import ProductController from '../controllers/productController';
const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});
routes.get('/products',ProductController.fetchProducts);
routes.get('/product/:id', ProductController.fetchProductsById);
routes.get('/products/:search', ProductController.fetchProductsByQuery);


routes.post('/product/new/add',  multer({ storage: storage }).array('files', 20), ProductController.addNewProduct);
module.exports = routes;