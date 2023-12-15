const lawyer = require("../models/Lawyer.model");
const asyncHandler = require("express-async-handler");
const Article = require("../models/Article.model");

exports.getLawyers = asyncHandler(async (req, res) => {
  const { expertise, name, experience, location } = req.body;

  // Create an array of non-empty values
  const searchTerms = [expertise, name, experience, location].filter(Boolean);

  // Create a regular expression pattern using the provided search terms
  const regexPattern = new RegExp(searchTerms.join("|"), "i");

  const Lawyers = await lawyer.find({
    $or: [
      { expertise: { $regex: regexPattern } },
      { name: { $regex: regexPattern } },
      { location: { $regex: regexPattern } },
      { experience: { $regex: regexPattern } },
    ],
  });

  res.json(Lawyers);
});

exports.searchArticles = asyncHandler(async (req, res) => {
  const headline = req.body.headline;
  const regexPattern = new RegExp(headline, "i");
  const article = await Article.find({ headline: { $regex: regexPattern } });
  const articlesWithLawyers = await Promise.all(
    article.map(async (article) => {
      const Lawyer = await lawyer.findById(article.postedBy).select("name");
      return {
        ...article.toObject(),
        name: Lawyer ? Lawyer.name : null,
      };
    })
  );
  res.json(articlesWithLawyers);
});
