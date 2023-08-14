//1
require('dotenv').config();
require('./models')
const express = require('express');
const cors = require('cors');
require('./mongoose')


//2
const app = express();

const routes = require('./routes')


// 3
app.use(cors())
app.use(express.json());

//4
app.use('/authentication',routes);


//5
app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT}`)
})