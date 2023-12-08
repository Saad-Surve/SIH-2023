const express = require("express");
const router = express.Router();
const {
  getArticles,
  getVideos,
} = require("../controllers/CommunityConnectController");

router.get("/getArticles", getArticles);
router.get("/getVideos", getVideos);

module.exports = router;
