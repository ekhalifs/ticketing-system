const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 10,
    },
    email: {
      type: String,
      required: true,
      minlength: 10,
    },
    password: {
      type: String,
      required: true,
      minlength: 10,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userSchema);
