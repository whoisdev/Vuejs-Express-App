const express = require('express');
const app = express();
const path = require('path');
const bodyParser  = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));
// app.set('views', path.join(__dirname, 'frontend'));
// app.set('view engine', 'ejs');
app.use(cors());


const products = require('./routes/product');


app.get(/.*/,function (req,res){
    res.sendFile(__dirname + '/server/public/index.html');
})

// app.use('/api/products', products);
// app.use('/admin', admin);


app.listen(3000, process.env.IP, () =>{
    console.log(`Serving on 3000`);
});