const mongoose = require('mongoose');
require('dotenv').config()
const connectDB = async() => {
    mongoose.connect(process.env.MONGO_URL).then(console.log("Connected To MongoDB"))
    .catch(err => {console.error(err)})
}

module.exports =  connectDB