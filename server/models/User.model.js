const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    emailID: {type: String, required: true, unique: true},
    username:{type:String, required:true},
    password:{type:String, required:true},
    help:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Help'}
    ]
},{
    collection:'Users'
})

module.exports = mongoose.model('User',userSchema)