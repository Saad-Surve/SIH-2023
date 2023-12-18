const Articles = require("../models/Article.model");
const Videos = require("../models/Video.model");
const Lawyer = require("../models/Lawyer.model");
const asyncHandler = require("express-async-handler");

const getArticles = asyncHandler(async (req, res) => {
  // const articles = await Articles.find();
  // res.status(200).json(articles);

  const article = await Articles.find();
  if (!article || article.length === 0) {
    return res.status(400).json({ message: "Articles not found" });
  }
  // Fetch associated lawyers for each article
  const articlesWithLawyers = await Promise.all(
    article.map(async (article) => {
      const lawyer = await Lawyer.findById(article.postedBy).select("name");
      return {
        ...article.toObject(),
        name: lawyer ? lawyer.name : null,
      };
    })
  );

  res.status(200).json(articlesWithLawyers);
});

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Videos.find();
  res.status(200).json(videos);
});

module.exports = {
  getArticles,
  getVideos,
};
