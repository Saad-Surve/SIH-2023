const mongoose = require('mongoose')
const Schema = mongoose.Schema
const contentSchema = new Schema({
    id:{type:String,required:true},
    content:{type:String, required:true}
},{
    collection:'WebsiteContent'
})

module.exports = mongoose.model('WebsiteContent',contentSchema)