var express = require('express');
const routes = express();
const Product = require('../src/controllers/product-controller/ProductController');
routes.get('/',function(req,res){
    res.render('./admin/index.ejs')
});
routes.get('/add',function(req,res){
    res.render('./admin/add/add.ejs')
});

routes.post('/add', Product.addNewProduct);
module.exports = routes;