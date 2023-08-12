require('dotenv').config();
require('./mongoose')
require('./models')


const express = require('express');
const cors = require('cors');


const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json());
app.use('/v1',routes);





app.listen(process.env.PORT,()=>{
    console.log(`server running in ${process.env.PORT}`)
})