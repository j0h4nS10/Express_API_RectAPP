const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');
const authRouter = require('./Auth.route');

router.get('/',(req,res) =>{
    res.json({
        message: "LOGIN_INTERFACE"
    });
})

router.use('/users',userRouter);
router.use('/auth',authRouter);


module.exports = router