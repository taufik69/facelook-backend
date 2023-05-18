const Usermodel = require("../model/Usermodel");
const bcrypt = require("bcrypt");
const { getToken } = require("../JWT/Token");
const chalk = require("chalk");
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await Usermodel.findOne({ email });
    if (User) {
      if (bcrypt.compareSync(password, User.password)) {
        const token = getToken({ id: User._id.toString() }, "2d");
        res.status(200).json({
          id: User._id,
          fristName: User.fristName,
          lastName: User.lastName,
          userName: User.userName,
          email: User.email,
          verfied: User.verfied,
          token: token,
        });
      } else {
        res.status(404).json({
          message: `${password} is incorrect`,
        });
      }
    } else {
      res.status(401).json({
        message: `${email} does't found plese sign up`,
      });
    }
  } catch (error) {
    console.log(chalk.bgCyanBright(error.message));
  }
};

module.exports = { signin };
