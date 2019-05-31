/**
 * Loads modules for Lodash and Path
 */
const _ = require('lodash');
const path = require('path');
/**
 * Loaded Models for Product and Uploads
 */
const HOMEDIR  = path.join(__dirname,'..'); // Path to Homedir

const ProductModel = require(path.join(HOMEDIR,'models','products','productModel'));
const UploadsModel = require(path.join(HOMEDIR,'models','uploads','uploadsModel'));

module.exports = {
    /**
     * Adds a new Product, Upload the image
     * Add product in db and uploads in db as well.
     * @param req
     * @param res
     * @returns null
     */
    addNewProduct : async (req,res) => {
        // All the Form fields
        const {
            productTitle, 
            productPrice, 
            productDescription, 
            productSize,
            productFeatured,
            productVisible
        } = req.body;


        const uploads = [];     // Uploaded Images
        _.forEach(req.files, file => {
            uploads.push(file.filename);
        });

        try{
            // Execute the query to add product
            let newProductId = await ProductModel.addNewProduct({
                productTitle,
                productTitle,
                productPrice,
                productDescription,
                productSize,
                productFeatured,
                productVisible
            });
            // Execute query to add uploads
            await UploadsModel.addNewUploads(uploads, newProductId);
            res.sendStatus(200); // Success message
        } catch(err){
            res.sendStatus(500); // Error occured
        }
    },
    /**
     * Fetch All the Products
     * @param req
     * @param res
     * @returns null
     */
    fetchProducts : async (req,res) => {
        try {
            let results = await ProductModel.fetchAllProducts(); // Query to fetch all products
            let productsData = []; // All the data to be returned
        
            /**
             * Loop all the data and forms an object with 
             * data and images to be returned
             */
            for (const result of results) {
                let product = {}
        
                product.productId = result.productId;
                product.productTitle = result.productTitle;
                product.productPrice = result.productPrice;
                product.productDescription = result.productDescription;
                product.productSize = result.productSize;
                product.uploads = [];
        
                // Fetch the uploads 
                let uploads = await UploadsModel.fetchUploadsByProductId(result.productId);
        
                for (var i = 0; i < uploads.length; i++) {
                    product.uploads.push(uploads[i].uploadPath)
                }
                productsData.push(product)
            }
        
            res.setHeader('Content-Type', 'application/json');
            res.status(200).end(JSON.stringify(productsData));
        } catch (err) {
            res.sendStatus(500);
        }
    },
    /**
     * Fetch a product by Id
     * @param req
     * @param res
     * @returns null
     */
    fetchProductsById : async (req,res) => {
        try{
            let id = req.params.id;
            let result = await ProductModel.fetchProductById(id); // Query to get product data
            let uploads = UploadsModel.fetchUploadsByProductId(id); // Query to get the uploads
           
            result = result[0]; // Formatting the SQL result
            
            let product = {};
            product.productId = result.productId;
            product.productTitle = result.productTitle;
            product.productPrice = result.productPrice;
            product.productDescription = result.productDescription;
            product.productSize = result.productSize;
            product.uploads = [];
            product.visible = result.isHidden == 1 ? false : true;
            product.featured = result.isFeatured == 1 ? true : false;
            
            // Add the uploads to the result data
            for (var i = 0; i < uploads.length; i++) {
                product.uploads.push(uploads[i].uploadPath)
            }
            res.setHeader('Content-Type', 'application/json');
            if (product != undefined) {
                res.status(200).end(JSON.stringify(product)); // Product exists
            } else if (product.length == 0 || product == undefined) {
                res.status(204).end();  // Product doesn't exists
            }
        } catch(err){
            res.sendStatus(500);
        }
    },
    /**
     * Fetch products based on user search
     * @param req
     * @param res
     * @return null
     */
    fetchProductsByQuery : async (req,res)=>{
        try {
            let searchQuery = req.params.search;
            let results = await ProductModel.fetchProductsByKeywords(searchQuery); // Fetch products
            let productsData = [];
        
            for (const result of results) {
                let product = {}
        
                product.productId = result.productId;
                product.productTitle = result.productTitle;
                product.productPrice = result.productPrice;
                product.productDescription = result.productDescription;
                product.productSize = result.productSize;
                product.uploads = [];
        
                let uploads = await UploadsModel.fetchUploadsByProductId(result.productId);
        
                for (var i = 0; i < uploads.length; i++) {
                    product.uploads.push(uploads[i].uploadPath)
                }
                productsData.push(product)
            }

            if(productsData){
                res.setHeader('Content-Type', 'application/json');
                res.status(200).end(JSON.stringify(productsData));
            } else{
                res.status(204).end();  // Product doesn't exists
            }
        } catch (err) {
            res.sendStatus(500);
        }
    },
    fetchFeaturedProducts : async (req,res)=>{
        let featuredProduct = await ProductModel.fetchFeaturedProducts();
        console.log(featuredProduct);
    }
}