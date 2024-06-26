const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  registerLawyer,
  loginLawyer,
  registerAdmin,
  loginAdmin,
  checkUsernameUser,
  checkUsernameLawyer,
} = require("../controllers/AuthController");

const {
  protectUser,
  protectLawyer,
  protectAdmin,
} = require("../middleware/AuthMiddleware");
const { uploadImage } = require("../utils/utils");

router.post("/registerLawyer", uploadImage.single("idProof"), registerLawyer);
router.post("/registerUser", registerUser);
router.post("/registerAdmin", registerAdmin);
router.post("/loginUser", loginUser);
router.post("/loginLawyer", loginLawyer);
router.post("/loginAdmin", loginAdmin);
router.get("/checkUsernameUser", checkUsernameUser);
router.get("/checkUsernameLawyer", checkUsernameLawyer);

module.exports = router;
