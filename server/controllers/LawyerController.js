const Lawyer = require('../models/Lawyer.model')
const asyncHandler = require('express-async-handler')
const Article = require('../models/Article.model')
const Video = require('../models/Video.model')

const getLawyerPosts = asyncHandler(async(req,res)=>{
    const lawyerUsername = req.query.username
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    if(!lawyer){
        res.status(400).json({'message':'No lawyer found'})
        return
    }
    res.status(200).json(lawyer)
}
)

const createArticle = asyncHandler(async(req,res)=>{
    const { title, content, lawyerUsername } = req.body
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    if(!lawyer){
        res.status(400).json({'message':'No lawyer found'})
        return
    }
    const article = await Article.create({
        headline:title,
        content,
        postedBy:lawyer._id,
        thumbnail:`/thumbnails/${req.thumbnailFileName}`,
    })
    await article.save()
    lawyer.articles.push(article._id)
    await lawyer.save()
    res.status(201).json({'message':'Article created'})
})

const createVideoPost = asyncHandler(async(req,res)=>{
    const { title, content, lawyerUsername } = req.body
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    if(!lawyer){
        res.status(400).json({'message':'No lawyer found'})
        return
    }
    const video = await Video.create({
        headline:title,
        content,
        postedBy:lawyer._id,
        path:`/videos/${req.videoFileName}`,
    })
    await video.save()
    lawyer.videos.push(video._id)
    await lawyer.save()
    res.status(201).json({'message':'Video created'})
})

const deleteArticle = asyncHandler(async(req,res)=>{
    const { articleId,lawyerUsername } = req.body
    const article = await Article.findById(articleId)
    if(!article){
        res.status(400).json({'message':'No article found'})
        return
    }
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    if(!lawyer){
        res.status(400).json({'message':'No lawyer found'})
        return
    }
    lawyer.articles.pull(articleId)
    await lawyer.save()
    await Article.findByIdAndDelete(articleId)
    res.status(200).json({'message':'Article deleted'})
})

const deleteVideo = asyncHandler(async(req,res)=>{
    const { videoId,lawyerUsername } = req.body
    const video = await Video.findById(videoId)
    if(!video){
        res.status(400).json({'message':'No video found'})
        return
    }
    const lawyer = await Lawyer.findOne({username:lawyerUsername})
    if(!lawyer){
        res.status(400).json({'message':'No lawyer found'})
        return
    }
    lawyer.videos.pull(videoId)
    await lawyer.save()
    await Video.findByIdAndDelete(videoId)
    res.status(200).json({'message':'Video deleted'})
})

module.exports = {
    getLawyerPosts,
    createArticle,
    createVideoPost,
    deleteArticle,
    deleteVideo
}