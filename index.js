//1
require('dotenv').config();
require('./models')
const express = require('express');
const cors = require('cors');
const connectionDB = require('./mongoose');


//routes
//2

const routes = require('./routes')

//
const app = express();

//
app.use(cors())
app.use(express.json());
connectionDB();

//4
app.use('/authentication',routes);


//5
app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT}`)
})