const express = require('express');

const router = express.Router();

const { createProduct,
    listAllproducts,
    readProduct,
    updateProduct,
    deleteProduct
 } = require('../controller')

 const auth = require('../middleware/auth');

 router.post('/', createProduct);
 router.get('/', listAllproducts);
 router.get('/', readProduct);
 router.put('/',auth, updateProduct);
 router.delete('/', auth, deleteProduct);


 module.exports = router;
 
 