const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema(
  {
    emailID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "Admin",
  }
);

module.exports = mongoose.model("Admin", adminSchema);
