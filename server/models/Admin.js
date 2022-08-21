const mongoose = require("mongoose");
const Admin = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  regNo: {
    type: String,
    required: true,
  },



  image: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "Admin",
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },


  password: {
    type: String,
    required: true,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lecture", Lecture);

module.exports = mongoose.model("Admin", Admin);
