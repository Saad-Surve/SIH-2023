const mongoose = require('mongoose')
const Schema = mongoose.Schema
const lawyerSchema = new Schema({
    emailID: {type: String, required: true, unique: true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    name:{type:String,required:true},
    expertise:{type:String, required:true},
    experience:{type:String, required:true},
    idProof:{type:String,required:true},
    location:{type:String,required:true},
    allowSharingOfData:{type:Boolean,required:true,default:false},
    articles:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Articles'}
    ],
    videos:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Videos'}
    ],
},{
    collection:'Lawyers'
})

module.exports = mongoose.model('Lawyers',lawyerSchema)