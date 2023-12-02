const mongoose = require('mongoose')
const Schema = mongoose.Schema
const videoSchema = new Schema({
    postedBy:{type:mongoose.Schema.Types.ObjectId, required:true,ref:'Lawyers'},
    postedOn:{type:Date,default:mongoose.now},
    headline:{type:String,required:true},
    path:{type:String, required:true}
},{
    collection:'Videos'
})

module.exports = mongoose.model('Videos',videoSchema)