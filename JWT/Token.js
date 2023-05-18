const jwt = require("jsonwebtoken");

exports.getToken = (userId, expireInDate) => {
  return jwt.sign(userId, process.env.JWT_SCRECT, { expiresIn: expireInDate });
};
