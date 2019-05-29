/**
 * Load and import modules
 */
const express = require('express');
const routes = express();
const multer = require('multer');

/**
 * imported controllers
 */
import ProductController from '../controllers/productController';


/**
 * Config for image/file upload
 * @todo Need to add check for file size and type
 */
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

/**
 * Static GET routes
 */
routes.get('/products',ProductController.fetchProducts);
routes.get('/products/featured', ProductController.fetchFeaturedProducts);

/**
 * Dynamic GET routes
 */
routes.get('/product/:id', ProductController.fetchProductsById);
routes.get('/products/search/:search', ProductController.fetchProductsByQuery);


/**
 * Static POST routes
 */
routes.post('/product/new/add',  multer({ storage: storage }).array('files', 20), ProductController.addNewProduct);

routes.get(/.*/,(req,res)=>{
	res.status(404).end(JSON.stringify({"404":"Invalid Request"}))
})

module.exports = routes;