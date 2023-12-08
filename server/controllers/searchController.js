const lawyer = require('../models/Lawyer.model')
const asyncHandler = require('express-async-handler')
const Article = require('../models/Article.model')

exports.getLawyer = asyncHandler(async(req,res)=>{
    const expertise = req.body.expertise
    const regexPattern = new RegExp(expertise, 'i');
    const Lawyer = await lawyer.find({ expertise: { $regex: regexPattern } })
    res.json(Lawyer)
})

exports.searchArticles = asyncHandler(async(req,res) => {
    const headline = req.body.headline
    const regexPattern = new RegExp(headline, 'i');
    const article = await Article.find({headline: {$regex: regexPattern}})
    const articlesWithLawyers = await Promise.all(
        article.map(async (article) => {
          const Lawyer = await lawyer.findById(article.postedBy).select("name");
          return {
            ...article.toObject(),
            name: Lawyer ? Lawyer.name : null,
          };
        })
      );
    res.json(articlesWithLawyers)
})

