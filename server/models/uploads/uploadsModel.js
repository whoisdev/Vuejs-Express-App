/**
 * Loaded path modules
 */
const path = require('path');

const HOMEDIR  = path.join(__dirname,'..','..');
const connect = require(path.join(HOMEDIR,'utils','connectDb'));

module.exports = {
    addNewUploads : function (files, productId){
        return new Promise((resolve,reject)=>{
            connect()
            .then((connection)=>{
                for(var i=0;i<files.length;i++){
                    let query = `
                    INSERT INTO uploads 
                    (
                        uploadPath,
                        productID
                    ) VALUES (
                        '${files[i]}',
                        '${productId}'
                    )`;
                    connection.query(query, (error)=>{
                        if(error) reject (error);
                    }); 
                }
                resolve();
            })
        })
    },
    removeUploads : function (productId){

    },
    fetchUploadsByProductId : function (productId){
        return new Promise((resolve,reject)=>{
            connect()
            .then((connection)=>{
                let query = `
                SELECT * FROM uploads WHERE productID = '${productId}'`;
                connection.query(query, (error, results)=>{
                    if(error) reject (error);
                    else resolve(results);
                }); 
            })
        })
    }
}