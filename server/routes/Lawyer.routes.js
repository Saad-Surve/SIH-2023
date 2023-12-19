const express = require("express");
const router = express.Router();

const {
  getLawyerPosts,
  createArticle,
  createVideoPost,
  deleteArticle,
  deleteVideo,
  getLawyers,
  getLawyer,
  getArticles
} = require("../controllers/LawyerController");

const {
  protectUser,
  protectLawyer,
  protectAdmin,
} = require("../middleware/AuthMiddleware");
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
router.get("/getLawyers",getLawyers)
router.get("/getLawyer",getLawyer)
router.get("/getArticles",getArticles)
module.exports = router;
