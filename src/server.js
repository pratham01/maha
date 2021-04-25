const express = require('express'),
    bodyParser = require('body-parser');
const app = express();
const checkoutCart = require('./service/checkout');
const port = process.env.PORT | 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/checkout',checkoutCart.checkout);

app.listen(port , ()=>{
    console.log(`Server running on port ${port}...`);
});

module.exports = app;