const mongoose = require("mongoose");

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  surname: {
    type: String,
    required: [true, "Please add surname"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Please add E-mail",
    validate: [validateEmail, "Please add e-mail correct form"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  phone: {
    type: String,
    required: [true, "Please add phone"],
  },
  password: {
    type: String,
    required: [true, "Please add content"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
