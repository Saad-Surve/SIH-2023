const Articles = require("../models/Article.model");
const Videos = require("../models/Video.model");
const asyncHandler = require("express-async-handler");

const getArticles = asyncHandler(async (req, res) => {
  const articles = await Articles.find();
  res.status(200).json(articles);
});

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Videos.find();
  res.status(200).json(videos);
});

module.exports = {
  getArticles,
  getVideos,
};
