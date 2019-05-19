const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
var bodyParser  = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var connectDb = require('./utils/connectDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressLayouts);
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'frontend'));
app.set('view engine', 'ejs');



const products = require('./routes/products');
const admin = require('./routes/admin');

app.get('/',function (req,res){
    res.sendFile('/public/index.html');
})
app.use('/api/products', products);
app.use('/admin', admin);


app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});