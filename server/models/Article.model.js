const mongoose = require('mongoose')
const Schema = mongoose.Schema
const articleSchema = new Schema({
    postedBy:{type:mongoose.Schema.Types.ObjectId, required:true,ref:'Lawyers'},
    postedOn:{type:Date,default:mongoose.now},
    headline:{type:String,required:true},
    content:{type:String, required:true},
    thumbnail:{type:String,required:true,default:'default_thumbnail.jpg'}
},{
    collection:'Articles'
})

module.exports = mongoose.model('Articles',articleSchema)