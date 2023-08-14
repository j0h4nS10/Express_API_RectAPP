const express = require('express')
const router = express.Router();

const userRouter = require('./user.routes')

router.get('/',(req,res) =>{
    res.json({
        menssage: "LOGIN_INTERFACE"
    })
})

router.use('/users',userRouter);


module.exports = router