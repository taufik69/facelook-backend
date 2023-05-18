exports.mailChecker = (email) => {
  return String(email)
    .toLowerCase()
    .match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
};
