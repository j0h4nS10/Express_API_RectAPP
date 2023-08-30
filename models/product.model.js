const mongoose = require('mongoose');

const productScheme = new mongoose.Schema({
    nameProduct: {
        type: String,
        required: true,
        unique: true
    }, 
    imgProduct: String,
    description: String,
    price: {
        type: Number,
        required: true
    }
});


mongoose.model('Products', productScheme,'Products');


