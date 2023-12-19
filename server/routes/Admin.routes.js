const express = require("express");
const router = express.Router();
const {
  getRequests,
  acceptLawyer,
  getChanges,
  acceptChanges,
  rejectChanges,
  rejectLawyer,
} = require("../controllers/AdminController");
const { protectAdmin } = require("../middleware/AuthMiddleware");

router.get("/getRequests", protectAdmin, getRequests);
router.post("/acceptLawyer", protectAdmin, acceptLawyer);
router.get("/getChanges", protectAdmin, getChanges);
router.post("/acceptChanges", protectAdmin, acceptChanges);
router.post("/rejectChanges", protectAdmin, rejectChanges);
router.post("/rejectLawyer", protectAdmin, rejectLawyer);

module.exports = router;
