const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User.model");
const Lawyer = require("../models/Lawyer.model");
const Admin = require("../models/Admin.model");

const protectUser = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    res.status(401);
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

const protectLawyer = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await Lawyer.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

const protectAdmin = asyncHandler(async (req, res, next) => {
  let token;

  console.log("REQ HEADERS: ", req.headers);
  console.log("REQ BODY: ", req.body);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      console.log("Received Token:", req.headers.authorization);

      token = req.headers.authorization.split(" ")[1];

      console.log("Received Token:", token);

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded Token:", decoded);

      // Get user from the token
      req.user = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    console.error("No Token Found");
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

module.exports = {
  protectUser,
  protectLawyer,
  protectAdmin,
};
