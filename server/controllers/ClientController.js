const User = require("../models/User.model");
const Help = require("../models/Help.model");
const asyncHandler = require("express-async-handler");
const Lawyer = require("../models/Lawyer.model");
const nodemailer = require("nodemailer");

// Create a nodemailer transporter
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saad.surve@spit.ac.in",
    pass: "8355989770",
  },
});

const addHelp = asyncHandler(async (req, res) => {
  const { username, category, location, description } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ message: "No such user" });
      return;
    }

    // Create the help document
    const help = await Help.create({
      category,
      location,
      sentBy: user._id,
      interestedLawyers: [],
      descriptionByClient: description,
      responseByLawyer: "",
    });

    // Update the user's help array
    user.help.push(help._id);
    await user.save();

    // Send emails to lawyers
    const lawyers = await Lawyer.find({}).select("emailID");

    const lawyerEmails = lawyers.map((lawyer) => lawyer.emailID);

    // Join the email IDs into a comma-separated string
    const toEmails = lawyerEmails.join(",");

    var mailOptions = {
      from: "saad.surve@spit.ac.in",
      to: toEmails,
      subject: "New Help Request",
      text: `
        Hello,
        You have a new help request from ${user.username}.
        Please check your dashboard for details. `,
    };

    // // lawyers.forEach(async (lawyer) => {
    // // });
    // await sendEmail("neha.gode@spit.ac.in", emailSubject, emailHtml);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({ message: "Help added in database" });
  } catch (error) {
    console.error("Error Adding Help:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const acceptHelp = asyncHandler(async (req, res) => {
  const { helpId, lawyerUserName, response } = req.body;
  // console.log("helpId: ",helpId)
  const help = await Help.findById(helpId).populate("sentBy");
  // console.log(help);
  // console.log("HElp: ",help)
  if (!help) {
    res.status(400).json({ message: "No help found" });
    return;
  }
  // console.log("kkkkkk",lawyerUserName)
  const lawyer = await Lawyer.findOne({ username: lawyerUserName });
  // console.log("aaaaaa",lawyer)
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  // console.log("WWWWW",help.interestedLawyers)
  const existingLawyer = help.interestedLawyers.find((interestedLawyer) =>
    interestedLawyer.lawyer.equals(lawyer._id)
  );
  // console.log("AAAAAAA",existingLawyer)
  if (existingLawyer) {
    res.status(400).json({ message: "Lawyer already exists in the array" });
    return;
  }
  const userEmails = help.sentBy.emailID;

  var mailOptions = {
    from: 'saad.surve@spit.ac.in',
    to: userEmails,
    subject: 'New Help Request',
    text: `
      Hello,
      You have a new help request from ${lawyerUserName}.
      Please check your dashboard for details. `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  help.interestedLawyers.push({
    lawyer: lawyer._id,
    responseByLawyer: response,
  });
  await help.save();

  res.status(200).json({ message: "Help accepted" });
});

const getAllHelp = asyncHandler(async (req, res) => {
  const lawyerUserName = req.query.username;
  // console.log(req.query);
  const lawyer = await Lawyer.findOne({ username: lawyerUserName });
  // console.log(lawyer)
  if (!lawyer) {
    res.status(400).json({ message: "No lawyer found" });
    return;
  }
  const cases = await Help.find().sort({ createdAt: -1 }).populate("sentBy");
  console.log(cases);
  Case = cases.filter(
    (caseItem) =>
      !caseItem.interestedLawyers.some(
        (item) => item.lawyer.toString() === lawyer._id.toString()
      )
  );

  // console.log(responseCases);
  res.status(200).json(Case);
});

const getClientHelp = asyncHandler(async (req, res) => {
  const clientUsername = req.query.username;
  const client = await User.findOne({ username: clientUsername });
  if (!client) {
    res.status(400).json({ message: "No client found" });
    return;
  }
  const cases = await Help.find({ sentBy: client._id })
    .sort({ createdAt: -1 })
    .populate("interestedLawyers.lawyer");
  res.status(200).json(cases);
  // console.log(cases)
});

const getAllLawyers = asyncHandler(async (req, res) => {
  const lawyers = await Lawyer.find({ allowSharingOfData: true });
  res.status(200).json(lawyers);
});

const helpResolved = asyncHandler(async (req, res) => {
  const { helpId, username } = req.body;
  if (!helpId) {
    res.status(400).json({ message: "No help found" });
    return;
  }
  const user = await User.findOne({ username: username });
  if (!user) {
    res.status(400).json({ message: "No user found" });
    return;
  }
  user.help.pull(helpId);
  await user.save();
  await Help.findByIdAndDelete(helpId);
  res.status(200).json({ message: "Help resolved" });
});

module.exports = {
  addHelp,
  acceptHelp,
  getAllHelp,
  getClientHelp,
  getAllLawyers,
  helpResolved,
};
