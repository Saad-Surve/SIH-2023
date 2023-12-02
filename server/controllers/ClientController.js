const User = require('../models/User.model')
const Help = require('../models/Help.model')
const asyncHandler = require('express-async-handler')
const Lawyer = require('../models/Lawyer.model')

const addHelp = asyncHandler(async(req,res)=>{
    const { username, category, location, description  } = req.body
    const user = await User.findOne({username:username})
    if(!user){
        res.status(400).json({'message':"NO such user"})
        return
    }
    const help = Help.create({
        category,
        location,
        sentBy:user._id,
        interestedLawyers:[],
        descriptionByClient:description,
        responseByLawyer:''
    })
    user.help.push((await help)._id)
    await user.save()
    res.status(201).json({'message':'Help added in database'})

})

const acceptHelp = asyncHandler(async(req,res)=>{
    const { helpId, lawyerUserName, response } = req.body
    const help = await Help.findById(helpId)
    const lawyer = await Lawyer.findOne({username:lawyerUserName})
    help.interestedLawyers.push({lawyer:lawyer._id,responseByLawyer:response})
    await help.save();
    res.status(200).json({'message':'Help accepted'})
})

const getAllHelp = asyncHandler(async (req, res) => {
    const lawyerUserName = req.query.username
    const lawyer = await Lawyer.findOne({ username: lawyerUserName })
    const cases = await Help.find().sort({ createdAt: -1 }).populate('sentBy')

    const responseCases = cases.map((c) => {
        return {
            ...c._doc,
            alreadySent: c.interestedLawyers.some(item => item.lawyer.equals(lawyer._id))
        };
    });

    res.status(200).json(responseCases);
});

const getClientHelp = asyncHandler(async(req,res)=>{
    const clientUsername = req.query.username
    const client = await User.findOne({username:clientUsername})
    const cases = await Help.find({sentBy:client._id}).sort({createdAt:-1}).populate('interestedLawyers.lawyer')
    res.status(200).json(cases)
})

const getAllLawyers = asyncHandler(async(req,res)=>{
    const lawyers = await Lawyer.find({allowSharingOfData:true})
    res.status(200).json(lawyers)
})

module.exports = {
    addHelp,
    acceptHelp,
    getAllHelp,
    getClientHelp,
    getAllLawyers
}