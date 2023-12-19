const mongoose = require('mongoose')
const Schema = mongoose.Schema
const requestSchema = new Schema({
    emailID: {type: String, required: true, unique: true},
    username:{type:String, required:true},
    phoneNo:{type:String, required: true},
    password:{type:String, required:true},
    name:{type:String,required:true},
    expertise:{type:String, required:true},
    experience:{type:String, required:true},
    idProof:{type:String,required:true},
    location:{type:String,required:true},
    allowSharingOfData:{type:Boolean,required:true,default:false}
},{
    collection:'Requests'
})

module.exports = mongoose.model('Requests',requestSchema)