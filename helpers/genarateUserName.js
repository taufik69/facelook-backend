const Usermodel = require("../model/Usermodel");

exports.GenarateUserName = async (userName) => {
  let isStay = false;

  do {
    let randomUserName = await Usermodel.findOne({ userName: userName });
    if (randomUserName) {
      userName += (+new Date() * Math.random()).toString().substring(0, 1);

      isStay = true;
    } else {
      isStay = false;
    }
  } while (isStay);
  return userName;
};
