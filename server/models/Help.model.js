const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const helpSchema = new Schema(
  {
    category: { type: String, required: true },
    location: { type: String, required: true },
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    interestedLawyers: [
      {
        lawyer: { type: mongoose.Schema.Types.ObjectId, ref: "Lawyers" },
        responseByLawyer: { type: String },
      },
    ],
    descriptionByClient: { type: String },
    createdAt: { type: Date, default: mongoose.now },
  },
  {
    collection: "Help",
  }
);

module.exports = mongoose.model("Help", helpSchema);
