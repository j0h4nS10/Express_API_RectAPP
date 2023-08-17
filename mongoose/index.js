//const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose');

const connectionDB = async () => {
    try { await mongoose.connect(process.env.URI);
        console.log("db connected");
    } catch (err) {
        console.log("db error")
}
};

module.exports = connectionDB;