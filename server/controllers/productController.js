var ProductModel = require('../models/productModel');
const chalk = require('chalk');

module.exports = {
    addNewProduct : function (req,res){
        const { productTitle, productPrice, productDescription, productSize } = req.body;
        ProductModel.addNewProduct({ productTitle, productPrice, productDescription, productSize })
        .then(()=>{
            console.log("success");
            res.send("Success!");
        })
        .catch((err)=>{
            console.log(chalk.red(err));    
        })
    },
    fetchProducts : function (req,res){
        ProductModel.fetchAllProducts()
        .then((result)=>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        })
        .catch((error)=>{
            console.log(chalk.red(error));
        })
    },
    fetchAllProductsById : function(req,res){
        let id = req.params.id;
        ProductModel.fetchProductById(id)
        .then((result)=>{
            if(result.length){
            res.render('./products/product-details/ProductDetails.ejs', {product :result[0] });
            } else{
                // Empty
            }
        })
        .catch((error)=>{
            // Make a new Error
        })
    }
}