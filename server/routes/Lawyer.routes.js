const express = require("express");
const router = express.Router();

const {
  getLawyerPosts,
  createArticle,
  createVideoPost,
  deleteArticle,
  deleteVideo,
  getLawyer,
  getArticles
} = require("../controllers/LawyerController");

const {
  protectUser,
  protectLawyer,
  protectAdmin,
} = require("../middleware/authmiddleware");
const { uploadThumbnail, uploadVideo } = require("../utils/utils");

router.post(
  "/createArticle",
  [protectLawyer, uploadThumbnail.single("thumbnail")],
  createArticle
);
router.get("/getLawyerPosts", protectLawyer, getLawyerPosts);
router.post(
  "/createVideoPost",
  [protectLawyer, uploadVideo.single("video")],
  createVideoPost
);
router.post("/deleteArticle", protectLawyer, deleteArticle);
router.post("/deleteVideo", protectLawyer, deleteVideo);
router.get("/getLawyer",getLawyer)
router.get("/getArticles",getArticles)
module.exports = router;
