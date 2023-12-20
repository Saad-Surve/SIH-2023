const Lawyer = require("../models/Lawyer.model");
const asyncHandler = require("express-async-handler");
const Article = require("../models/Article.model");
const Video = require("../models/Video.model");

const getLawyers = asyncHandler(async (req, res) => {
  const lawyers = await Lawyer.find();
  if (!lawyers) {
    res.status(400).json({ message: "No lawyers found" });
  }
  res.status(200).json(lawyers);
});

const getLawyer = asyncHandler(async (req, res) => {
  const { username } = req.query;
  const lawyer = await Lawyer.findOne({ username });
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
  }
  res.status(200).json(lawyer);
});

const getArticles = asyncHandler(async (req, res) => {
  const article = await Article.find();
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

// const getLawyerPosts = asyncHandler(async (req, res) => {
//   const lawyerUsername = req.query.lawyerUsername;
//   const lawyer = await Lawyer.findOne({ username: lawyerUsername });
//   console.log(lawyer)
//   if (!lawyer) {
//     res.status(400).json({ message: "No lawyer found" });
//     return;
//   }
//   const rows = [];

//   for (const articleId of lawyer.articles) {
//     const article = await Article.findOne({ _id: articleId });
//     rows.push({ ...article.toObject(), type: "Article" });
//   }

//   for (const videoId of lawyer.videos) {
//     const video = await Video.findOne({ _id: videoId });
//     rows.push({ ...video.toObject(), type: "Video" });
//   }
//   rows.sort((a, b) => {
//     const dateA = new Date(a.postedOn);
//     const dateB = new Date(b.postedOn);

//     // Compare the dates
//     return dateB - dateA;
//   });
//   res.status(200).json(rows);
// });

const getLawyerPosts = asyncHandler(async (req, res) => {
  const lawyerUsername = req.query.lawyerUsername;
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });

  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }

  const rows = [];

  if (lawyer.articles && lawyer.articles.length > 0) {
    for (const articleId of lawyer.articles) {
      if (articleId) {
        const article = await Article.findOne({ _id: articleId });
        if (article) {
          rows.push({ ...article.toObject(), type: "Article" });
        }
      }
    }
  }
  if (lawyer.videos && lawyer.videos.length > 0) {
    for (const videoId of lawyer.videos) {
      if (videoId) {
        const video = await Video.findOne({ _id: videoId });
        if (video) {
          rows.push({ ...video.toObject(), type: "Video" });
        }
      }
    }
  }

  rows.sort((a, b) => {
    const dateA = new Date(a.postedOn);
    const dateB = new Date(b.postedOn);

    return dateB - dateA;
  });

  res.status(200).json(rows);
});

const createArticle = asyncHandler(async (req, res) => {
  const { title, content, lawyerUsername } = req.body;
  // console.log(lawyerUsername);
  const lawyer = await Lawyer.findOne({ username: lawyerUsername });
  // console.log(lawyer);
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
  getLawyers,
  getLawyer,
  getArticles,
};
