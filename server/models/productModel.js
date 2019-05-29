const mysql = require('mysql');
const connect = require('../utils/connectDb');
const chalk = require('chalk');
module.exports = {
    addNewProduct : function 
    (
        { 
            productTitle, 
            productPrice, 
            productDescription, 
            productSize,
            productFeatured,
            productVisible
        }
    ){
        return new Promise((resolve,reject)=>{
            let isFeatured, isHidden = 0;
            isFeatured = productFeatured ?  1 : 0;
            isHidden = productVisible ? 0 : 1;
            connect()
            .then((connection)=>{
                let query = `INSERT INTO products 
                (
                    productTitle,
                    productPrice,
                    productDescription,
                    productSize,
                    isFeatured,
                    isHidden
                ) VALUES 
                (
                    '${productTitle}',
                    '${productPrice}',
                    '${productDescription}',
                    '${productSize}',
                    '${isFeatured}',
                    ${isHidden}
                );`
                connection.query(query,function(error, result, fields){
                    if(error) {
                        reject(error);
                    }
                    else {
                        connection.end();
                        resolve(result.insertId);
                    }
                });
            })
        })
    },
    fetchAllProducts: function() {
        return new Promise((resolve,reject)=>{
            let query = `SELECT * FROM products WHERE isHidden = 0;`;
            connect()
            .then((connection)=>{
                connection.query(query, function(error, results, fields){
                    if(error) reject(error);
                    else {
                        connection.end();
                        resolve(results);
                    }
                });
            })
        })
    },
    fetchProductById : function (id){
        return new Promise((resolve,reject)=>{
            let query = `SELECT * FROM products WHERE productId = ${id}`;
            connect()
            .then((connection)=>{
                connection.query(query,(error,result, fields)=>{
                    if(error) reject(error)
                    else{
                        connection.end();
                        resolve(result);
                    }
                })
            })
        });
    },
    fetchProductsByKeywords : (keyword)=>{
        return new Promise((resolve,reject)=>{
            let query = `
                SELECT * FROM products 
                WHERE productTitle LIKE '%${keyword}%' 
                OR productDescription LIKE '%${keyword}%';`;
                connect()
                .then((connection)=>{
                    console.log(query);
                    connection.query(query,(error,results)=>{
                        if (error) reject(error);
                        else resolve(results);
                    })
                })
        })
    },
    fetchFeaturedProducts : ()=>{
        return new Promise((resolve,reject)=>{
            let query;
            query = `SELECT * FROM products
                    WHERE isFeatured = 1`;
            connect()
            .then((connection)=>{
                connection.query(query,(error,results)=>{
                    console.log(results);
                    error ? reject(error) : reject(results);
                })
            })
        });
    }
}