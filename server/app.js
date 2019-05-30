/**
 * Load node modules for routing, server and parsing
 */
const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const cors = require('cors');


/**
 * Set body-parser and body structure
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Set static paths for public (css,js)
 * and uploads (img)
 */
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/uploads/'));

app.use(cors());

/**
 * Routing module for products
 */
const products = require('./routes/product');

/**
 * All the API requests
 */
app.use('/api', products);

/**
 * Everything except API request 
 * triggers the SPA(FRONT-END).
 */
app.get(/.*/,function (req,res){
    res.sendFile(__dirname + '/public/index.html');
})


/**
 * Server Port.
 */
app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});