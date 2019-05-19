const mysql = require('mysql');
const connect = require('../../../utils/connectDb');
const chalk = require('chalk');
module.exports = {
    addNewProduct : function 
    (
        { 
            productTitle,
            productPrice,
            productDescription,
            productSize
        }
    ){
        return new Promise((resolve,reject)=>{
            connect()
            .then((connection)=>{
                let query = `INSERT INTO products 
                (
                    productTitle,
                    productPrice,
                    productDescription,
                    productSize
                ) VALUES 
                (
                    '${productTitle}',
                    '${productPrice}',
                    '${productDescription}',
                    '${productSize}'
                );`
                connection.query(query,function(error, results, fields){
                    if(error) {
                        reject(error);
                    }
                    else {
                        connection.end();
                        resolve();
                    }
                });
            })
        })
    },
    fetchAllProducts: function() {
        return new Promise((resolve,reject)=>{
            let query = `SELECT * FROM products;`;
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
    }
}