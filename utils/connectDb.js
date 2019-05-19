const mysql = require('mysql');
const chalk = require('chalk'); 
module.exports = function connect(){
    return new Promise((resolve,reject)=>{
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'products_sales'
        });
        connection.connect(function(err){
            if(err){
                console.log(chalk.red('error connecting: ' + err.stack));
                reject(err);
            }
            console.log(chalk.green('Connected!'));
            return resolve(connection)
        });
        
    })
}