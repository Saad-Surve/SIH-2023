const lawyer = require('../models/Lawyer.model')
const asyncHandler = require('express-async-handler')

exports.getLawyer = asyncHandler(async(req,res)=>{
    const expertise = req.body.expertise
    const regexPattern = new RegExp(expertise, 'i');
    const Lawyer = await lawyer.find({ expertise: { $regex: regexPattern } })
    res.json(Lawyer)
})


