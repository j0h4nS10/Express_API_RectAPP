const express = require('express')
const router = express.Router();

const userRouter = require('./user.routes')

router.get('/',(req,res) =>{
    res.json({
        response: " /"
    })
})

router.use('/',userRouter);


module.exports = router