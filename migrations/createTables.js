var connect = require('../utils/connectDb');
const chalk = require('chalk'); 

function createTables(){
    connect()
        .then(function (connection){
            connection.query("CREATE TABLE IF NOT EXISTS  products (productId int AUTO_INCREMENT, productTitle varchar(255),productPrice varchar(255),productDescription varchar(255),productSize varchar(255),isHidden int,isFeatured int, PRIMARY KEY (`productId`));"
            , function (error, results, fields) {
                if (error) console.log(chalk.red(error))
                else console.log(chalk.green("Products Table created"));
              });
              connection.query(`
              CREATE TABLE IF NOT EXISTS  uploads 
                  (
                      uploadId int NOT NULL UNIQUE,
                      uploadPath varchar(255),
                      productID int
                  )`
              , function (error, results, fields) {
                  if (error) console.log(chalk.red(error))
                  else console.log(chalk.green("Uploads Table created"));
                });
                connection.query(`
                CREATE TABLE IF NOT EXISTS  queries 
                    (
                        queryID int NOT NULL UNIQUE,
                        queryPhoneNumber varchar(255),
                        queryMessage varchar(255),
                      productID int
                    )`
                , function (error, results, fields) {
                    if (error) console.log(chalk.red(error))
                    else console.log(chalk.green("Queries Table created"));
                });
        });
}
createTables();