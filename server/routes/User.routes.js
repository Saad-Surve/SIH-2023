const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/UserController");

const {
  protectUser,
  protectLawyer,
  protectAdmin,
} = require("../middleware/authmiddleware");
// const { uploadThumbnail, uploadVideo } = require("../utils/utils");

router.get("/getUser", [protectUser], getUser);

module.exports = router;
