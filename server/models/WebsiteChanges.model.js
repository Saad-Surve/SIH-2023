const mongoose = require('mongoose')
const Schema = mongoose.Schema
const changesSchema = new Schema({
    id:{type:String,required:true},
    originalContent:{type:String, required:true},
    changedContent:{type:String, required:true}
},{
    collection:'WebsiteChanges'
})

module.exports = mongoose.model('WebsiteChanges',changesSchema)