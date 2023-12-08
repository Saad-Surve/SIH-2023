const Lawyer = require("../models/Lawyer.model");
const asyncHandler = require("express-async-handler");
const Article = require("../models/Article.model");
const Video = require("../models/Video.model");

const getLawyer = asyncHandler(async(req,res) =>{
  const lawyer = await Lawyer.find();
  if(!lawyer){
    res.status(400).json({ message: "No lawyer found" })
  }
  res.status(200).json(lawyer)
})

const getLawyerPosts = asyncHandler(async (req, res) => {
  console.log("req.query.lawyerUsername : ", req.query);
  const lawyerUsername = req.query.lawyerUsername;
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });

  console.log("Lawyer here : ", lawyer);

  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  const rows = [];

  for (const articleId of lawyer.articles) {
    console.log("Article in this case : ", articleId);
    const article = await Article.findOne({ _id: articleId });
    console.log("Article : ", article);
    rows.push({ ...article.toObject(), type: "Article" });
  }

  for (const videoId of lawyer.videos) {
    console.log("Video in this case : ", videoId);
    const video = await Video.findOne({ _id: videoId });
    console.log("Video : ", video);
    rows.push({ ...video.toObject(), type: "Video" });
  }

  rows.sort((a, b) => {
    const dateA = new Date(a.postedOn);
    const dateB = new Date(b.postedOn);

    // Compare the dates
    return dateB - dateA;
  });

  res.status(200).json(rows);
});

const createArticle = asyncHandler(async (req, res) => {
  const { title, content, lawyerUsername } = req.body;
  console.log(title + "|" + content + "|" + lawyerUsername);
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  const article = await Article.create({
    headline: title,
    content,
    postedBy: lawyer._id,
    thumbnail: `/thumbnails/${req.thumbnailFileName}`,
  });
  await article.save();
  lawyer.articles.push(article._id);
  await lawyer.save();
  res.status(201).json({ message: "Article created" });
});

const createVideoPost = asyncHandler(async (req, res) => {
  const { title, lawyerUsername } = req.body;
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  const video = await Video.create({
    headline: title,
    postedBy: lawyer._id,
    path: `/videos/${req.videoFileName}`,
  });
  await video.save();
  lawyer.videos.push(video._id);
  await lawyer.save();
  res.status(201).json({ message: "Video created" });
});

const deleteArticle = asyncHandler(async (req, res) => {
  const { articleId, lawyerUsername } = req.body;
  const article = await Article.findById(articleId);
  if (!article) {
    res.status(400).json({ message: "No article found" });
    return;
  }
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  lawyer.articles.pull(articleId);
  await lawyer.save();
  await Article.findByIdAndDelete(articleId);
  res.status(200).json({ message: "Article deleted" });
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId, lawyerUsername } = req.body;
  const video = await Video.findById(videoId);
  if (!video) {
    res.status(400).json({ message: "No video found" });
    return;
  }
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  lawyer.videos.pull(videoId);
  await lawyer.save();
  await Video.findByIdAndDelete(videoId);
  res.status(200).json({ message: "Video deleted" });
});

module.exports = {
  getLawyerPosts,
  createArticle,
  createVideoPost,
  deleteArticle,
  deleteVideo,
  getLawyer
};
