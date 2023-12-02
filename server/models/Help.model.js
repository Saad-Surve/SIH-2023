const mongoose = require('mongoose')
const Schema = mongoose.Schema
const helpSchema = new Schema({
    category:{type:String, required:true},
    location:{type:String, required:true},
    sentBy:{type:mongoose.Schema.Types.ObjectId, required:true,ref:'Users'},
    interestedLawyers:{type:mongoose.Schema.Types.ObjectId, ref:'Lawyers'},
    descriptionByClient:{type:String},
    responseByLawyer:{type:String}
},{
    collection:'Help'
})

module.exports = mongoose.model('Help',helpSchema)