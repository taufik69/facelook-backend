const Usermodel = require("../model/Usermodel");

exports.existEmail = (email) => {
  return Usermodel.findOne({ email });
};
