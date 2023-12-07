const lawyer = require('../models/Lawyer.model')
const asyncHandler = require('express-async-handler')

exports.getLawyer = asyncHandler(async(req,res)=>{
    const expertise = req.body.expertise
    const Lawyer = await lawyer.find({expertise: expertise}).select()
    res.json(Lawyer)
})

