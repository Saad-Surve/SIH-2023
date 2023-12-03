const Lawyer = require('../models/Lawyer.model')
const asyncHandler = require('express-async-handler')
const Article = require('../models/Article.model')
const Video = require('../models/Video.model')

const getLawyerPosts = asyncHandler(async(req,res)=>{
    const lawyerUsername = req.query.username
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    res.status(200).json(lawyer)
}
)

const createArticle = asyncHandler(async(req,res)=>{
    const { title, content, lawyerUsername } = req.body
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    const article = await Article.create({
        headline:title,
        content,
        postedBy:lawyer._id,
        thumbnail:`/${req.thumbnailFileName}`,

    })
    await article.save()
    lawyer.articles.push(article._id)
    await lawyer.save()
    res.status(201).json({'message':'Article created'})
})

const createVideoPost = asyncHandler(async(req,res)=>{
    const { title, content, lawyerUsername } = req.body
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    const video = await Video.create({
        headline:title,
        content,
        postedBy:lawyer._id,
        path:`/${req.videoFileName}`,

    })
    await video.save()
    lawyer.videos.push(video._id)
    await lawyer.save()
    res.status(201).json({'message':'Video created'})
})


module.exports = {
    getLawyerPosts,
    createArticle,
    createVideoPost
}