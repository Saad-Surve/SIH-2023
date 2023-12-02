const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User.model')
const Lawyer = require('../models/Lawyer.model')
const Admin = require('../models/Admin.model')
const {generateToken} = require('../utils/utils')
const Requests = require('../models/Requests.model')

const registerUser = asyncHandler(async(req,res)=>{
    const { emailID, username , password } = req.body;
    if(!emailID || !username || !password){
        res.status(400).json({message:"Please add all fields"})
    }
    const userExists = await User.findOne({emailID})
    if(userExists){
        res.status(400).json({message:'User already exists'})
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        emailID,
        username,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            emailID:user.emailID,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message:"Invalid user data"})
    }

})

const registerLawyer = asyncHandler(async(req,res)=>{
    const { emailID, username , password, name, location,expertise, experience,allowSharingOfData } = req.body;
    const lawyerExists = await Lawyer.findOne({emailID})
    if(lawyerExists){
        res.status(400).json({message:'User already exists'})
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await Requests.create({
        emailID,
        username,
        password:hashedPassword,
        name,
        location,
        expertise,
        experience,
        idProof:`/idProof_${username}.png`,
        allowSharingOfData:allowSharingOfData
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            emailID:user.emailID,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message:"Invalid user data"})
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const { emailID, password } = req.body
    // Check for user email
    const user = await User.findOne({ emailID })
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.username,
        email: user.emailID,
        token: generateToken(user._id),
      })
    } else {
      res.status(400).json('Invalid credentials')
    }
})



const loginLawyer = asyncHandler(async (req, res) => {
    const { emailID, password } = req.body
  
    // Check for user email
    const user = await Lawyer.findOne({ emailID })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.username,
        email: user.emailID,
        token: generateToken(user._id),
      })
    } else {
      res.status(400).json({message:'Invalid credentials'})
    }
})
const loginAdmin = asyncHandler(async (req, res) => {
    const { emailID, password } = req.body
  
    // Check for user email
    const user = await Admin.findOne({ emailID })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.username,
        email: user.emailID,
        token: generateToken(user._id),
      })
    } else {
      res.status(400).json({message:'Invalid credentials'})
    }
})
const registerAdmin = asyncHandler(async(req,res)=>{
    const { emailID, username , password } = req.body;
    if(!emailID || !username || !password){
        res.status(400).json({message:"Please add all fields"})
    }
    const userExists = await Admin.findOne({emailID})
    if(userExists){
        res.status(400).json({message:'User already exists'})
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await Admin.create({
        emailID,
        username,
        password:hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            username: user.username,
            emailID:user.emailID,
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json({message:"Invalid user data"})
    }

})

module.exports = {
    registerUser,
    loginUser,
    registerLawyer,
    loginLawyer,
    registerAdmin,
    loginAdmin
}