const express = require('express');
const app = express();
const path = require('path');
const bodyParser  = require('body-parser');
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

app.use(cors());


const products = require('./routes/product');

app.use('/api', products);

app.get(/.*/,function (req,res){
    res.sendFile(__dirname + '/public/index.html');
})


app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});