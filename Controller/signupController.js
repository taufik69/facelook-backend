const Usermodel = require("../model/Usermodel");
const { existEmail } = require("../helpers/existingEmail");
const { mailChecker } = require("../helpers/mailCheker");
const { userNameLengthCheck } = require("../helpers/usernamelength");
const { GenarateUserName } = require("../helpers/genarateUserName");
const bcrypt = require("bcrypt");
const chalk = require("chalk");

exports.signup = async (req, res) => {
  try {
    const {
      fristName,
      lastName,
      // userName,
      email,
      password,
      brithDay,
      brithMonth,
      brithYear,
      gender,
    } = req.body;

    if (!userNameLengthCheck(fristName, 3, 16)) {
      return res.status(400).json({
        message: `This fristName ${fristName} => should be upper 3 or more not above 16`,
      });
    }

    if (!userNameLengthCheck(lastName, 3, 16)) {
      return res.status(400).json({
        message: `This lastname ${lastName} => should be upper 3 or more not above 16`,
      });
    }

    if (!mailChecker(email)) {
      return res.status(400).json({
        message: "Email format is missing",
      });
    }

    // This helper part working for existin mail in database.

    if (await existEmail(email)) {
      return res.status(400).json({
        message: "This Email is already exist",
      });
    }

    // for cheking password
    if (!userNameLengthCheck(password, 8, 20)) {
      return res.status(400).json({
        message: `This password => ${password}   should be upper 3 or more not above 16`,
      });
    }

    // converting plain password to hash passward
    const hashPassward = await bcrypt.hash(password, 10);

    // Auto generate user name

    let temporary = fristName + "_" + lastName;
    let newGenarateUsername = await GenarateUserName(temporary);
    console.log(chalk.bgRedBright(newGenarateUsername));

    const user = await new Usermodel({
      fristName,
      lastName,
      userName: newGenarateUsername,
      email,
      password: hashPassward,
      brithDay,
      brithMonth,
      brithYear,
      gender,
    }).save();
    res.status(200).json({
      message: `Sucessfully registration complete ${user}`,
    });
  } catch (error) {
    console.log("user model schema error=>", error.message);
  }
};
