//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose');

mongoose.connect(process.env.URL)
.then(() => {
    console.log("db connected")
})
.catch((error) => {
    console.log("error db not connected")
})

module.exports = mongoose