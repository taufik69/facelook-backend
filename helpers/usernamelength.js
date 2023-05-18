exports.userNameLengthCheck = (username, min, max) => {
  if (username.length <= min || username.length >= max) {
    return false;
  } else {
    return true;
  }
};
