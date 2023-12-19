const Admin = require("../models/Admin.model");
const asyncHandler = require("express-async-handler");
const Lawyer = require("../models/Lawyer.model");
const Requests = require("../models/Requests.model");
const WebsiteChanges = require("../models/WebsiteChanges.model");
const WebsiteContent = require("../models/WebsiteContent.model");

const getRequests = asyncHandler(async (req, res) => {
  const requests = await Requests.find();
  res.json(requests);
});

const acceptLawyer = asyncHandler(async (req, res) => {
  const requestId = req.body._id;
  if (!requestId) {
    res.status(400).json({ message: "Invalid request" });
    return;
  }
  const lawyerDetails = await Requests.findById(requestId);
  if (!lawyerDetails) {
    res.status(400).json({ message: "Invalid request" });
    return;
  }
  const lawyer = await Lawyer.create({
    emailID: lawyerDetails.emailID,
    username: lawyerDetails.username,
    password: lawyerDetails.password,
    name: lawyerDetails.name,
    phoneNo: lawyerDetails.phoneNo,
    location: lawyerDetails.location,
    expertise: lawyerDetails.expertise,
    experience: lawyerDetails.experience,
    idProof: lawyerDetails.idProof,
    allowSharingOfData: lawyerDetails.allowSharingOfData,
  });
  await lawyer.save();
  await Requests.findByIdAndDelete(requestId);
  res.status(200).json({ message: "Lawyer added" });
});
const rejectLawyer = asyncHandler(async (req, res) => {
  const { requestId } = req.body;
  if (!requestId) {
    res.status(400).json({ message: "Invalid request" });
    return;
  }
  await Requests.findByIdAndDelete(requestId);
  res.status(200).json({ message: "Lawyer rejected" });
});

const getChanges = asyncHandler(async (req, res) => {
  const changes = await WebsiteChanges.find();
  res.json(changes);
});

const acceptChanges = asyncHandler(async (req, res) => {
  const { changesId, newContent } = req.body;
  if (!changesId) {
    res.status(400).json({ message: "No changes found" });
    return;
  }
  const websiteChanges = await WebsiteChanges.findById(changesId);
  const websiteContent = await WebsiteContent.findOne({
    id: websiteChanges.id,
  });
  if (!websiteContent) {
    res.status(400).json({ message: "No websiteContent found" });
    return;
  }
  websiteContent.content = newContent;
  await websiteContent.save();
  await WebsiteChanges.findByIdAndDelete(changesId);

  res.status(200).json({ message: "Changes accepted" });
});

const rejectChanges = asyncHandler(async (req, res) => {
  const { changesId } = req.body;
  if (!changesId) {
    res.status(400).json({ message: "No changes found" });
    return;
  }
  await WebsiteChanges.findByIdAndDelete(changesId);
  res.status(200).json({ message: "Changes rejected" });
});

module.exports = {
  getRequests,
  acceptLawyer,
  getChanges,
  acceptChanges,
  rejectChanges,
  rejectLawyer,
};
