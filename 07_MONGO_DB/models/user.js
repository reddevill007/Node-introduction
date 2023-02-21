const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

module.exports = User;
