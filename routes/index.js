const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');
const authRouter = require('./Auth.route');
const productRouter = require('./product.routes');

router.get('/',(req,res) =>{
    res.json({
        message: "LOGIN_INTERFACE"
    });
})

router.use('/users',userRouter);
router.use('/auth',authRouter);
router.use('/product',productRouter);


module.exports = router