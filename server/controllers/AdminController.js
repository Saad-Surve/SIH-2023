const Admin = require('../models/Admin.model')
const asyncHandler = require('express-async-handler')
const Lawyer = require('../models/Lawyer.model')
const Requests = require('../models/Requests.model')

const getRequests = asyncHandler(async(req,res)=>{
    const requests = await Requests.find()
    res.json(requests)
})

const acceptLawyer = asyncHandler(async(req,res)=>{
    const { requestId } = req.body
    const lawyerDetails = await Requests.findById(requestId)
    const lawyer = await Lawyer.create({
        emailID:lawyerDetails.emailID,
        username:lawyerDetails.username,
        password:lawyerDetails.password,
        name:lawyerDetails.name,
        location:lawyerDetails.location,
        expertise:lawyerDetails.expertise,
        experience:lawyerDetails.experience,
        idProof:lawyerDetails.idProof,
        allowSharingOfData:lawyerDetails.allowSharingOfData
    })
    await lawyer.save()
    await Requests.findByIdAndDelete(requestId)
    res.status(200).json({'message':'Lawyer added'})
})

module.exports = {
    getRequests,
    acceptLawyer
}