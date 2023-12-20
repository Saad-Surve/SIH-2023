const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User.model");
const Lawyer = require("../models/Lawyer.model");
const Admin = require("../models/Admin.model");
const { generatetoken } = require("../utils/utils");
const Requests = require("../models/Requests.model");

const checkUsernameUser = asyncHandler(async (req, res) => {
  const { username } = req.query;

  const usernameExists = await User.findOne({ username: username });

  if (usernameExists) {
    res
      .status(200)
      .json({ message: "Username already exists", usernameExists: true });
  } else {
    res
      .status(200)
      .json({ message: "Username available", usernameExists: false });
  }
});

const checkUsernameLawyer = asyncHandler(async (req, res) => {
  const { username } = req.query;
  const usernameExists = await Lawyer.findOne({ username: username });
  if (usernameExists) {
    res
      .status(200)
      .json({ message: "Username already exists", usernameExists: true });
  } else {
    res
      .status(200)
      .json({ message: "Username available", usernameExists: false });
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { emailID, username, password } = req.body;
  if (!emailID || !username || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }
  const userExists = await User.findOne({ emailID });
  if (userExists) {
    res.status(200).json({ message: "User already exists", userExists: true });
    return;
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    emailID,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      emailID: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "User",
        username: user.username,
      }),
      success: true,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

const registerLawyer = asyncHandler(async (req, res) => {
  const {
    emailID,
    username,
    password,
    phoneNo,
    name,
    location,
    expertise,
    experience,
    allowSharingOfData,
  } = req.body;
  const lawyerExists = await Lawyer.findOne({ emailID });
  if (lawyerExists) {
    res
      .status(200)
      .json({ message: "Lawyer already exists", userExists: true });
    return;
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await Requests.create({
    emailID,
    username,
    password: hashedPassword,
    name,
    phoneNo,
    location,
    expertise,
    experience,
    idProof: `/idProofs/idProof_${username}.png`,
    allowSharingOfData: allowSharingOfData,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      emailID: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "Lawyer",
        username: user.username,
      }),
      success: true,
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  // Check for user email

  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.username,
      email: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "User",
        username: user.username,
      }),
      success: true,
    });
  } else {
    res.status(200).json({ message: "Invalid credentials", success: false });
  }
});

const loginLawyer = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check for user email
  const user = await Lawyer.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.username,
      email: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "Lawyer",
        username: user.username,
      }),
      success: true,
    });
  } else {
    res.status(200).json({ message: "Invalid credentials", success: false });
  }
});
const loginAdmin = asyncHandler(async (req, res) => {
  const { emailID, password } = req.body;

  // Check for user email
  const user = await Admin.findOne({ emailID });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.username,
      email: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "Admin",
        username: user.username,
      }),
      success: true,
    });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

const registerAdmin = asyncHandler(async (req, res) => {
  const { emailID, password } = req.body;
  if (!emailID || !password) {
    res.status(400).json({ message: "Please add all fields" });
  }
  const userExists = await Admin.findOne({ emailID });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await Admin.create({
    emailID,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      emailID: user.emailID,
      token: generatetoken({
        id: user._id,
        role: "Admin",
        username: user.username,
      }),
    });
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  registerLawyer,
  loginLawyer,
  registerAdmin,
  loginAdmin,
  checkUsernameUser,
  checkUsernameLawyer,
};
