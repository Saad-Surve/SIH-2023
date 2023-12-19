const express = require("express");
const router = express.Router();
const {
  addHelp,
  acceptHelp,
  getAllHelp,
  getClientHelp,
  getAllLawyers,
  helpResolved,
} = require("../controllers/ClientController");
const {
  protectUser,
  protectLawyer,
  protectAdmin,
} = require("../middleware/AuthMiddleware");

router.post("/addHelp", protectUser, addHelp);
router.post("/acceptHelp", protectLawyer, acceptHelp);
router.get("/getAllHelp", protectLawyer, getAllHelp);
router.get("/getClientHelp", protectUser, getClientHelp);
router.get("/getAllLawyers", getAllLawyers);
router.post("/helpResolved", protectUser, helpResolved);
module.exports = router;
