var connect = require('../server/utils/connectDb');
const chalk = require('chalk'); 

function dropTables(){
    connect()
    .then(function(connection){
        connection.query(`
        DROP TABLE products`
        , function (error, results, fields) {
            if (error) console.log(chalk.red(error))
            else console.log(chalk.green("products Table droped"));
          });
          connection.query(`
          DROP TABLE queries`
          , function (error, results, fields) {
              if (error) console.log(chalk.red(error))
              else console.log(chalk.green("queries Table droped"));
        });
        connection.query(`
        DROP TABLE uploads`
        , function (error, results, fields) {
            if (error) console.log(chalk.red(error))
            else console.log(chalk.green("uploads Table droped"));
      });
    });
}

dropTables();