const User = require("../models/User.model");
const asyncHandler = require("express-async-handler");
// const Article = require("../models/Article.model");
// const Video = require("../models/Video.model");

const getUser = asyncHandler(async (req, res) => {
  const { username } = req.query;
  const user = await User.findOne({ username });

  if (!user) {
    res.status(400).json({ message: "No lawyer found" });
  }
  res.status(200).json(user);
});

module.exports = { getUser };
