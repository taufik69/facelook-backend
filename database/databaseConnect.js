const mongoose = require("mongoose");
require("dotenv").config();

const Connection = async () => {
  mongoose.set("strictQuery", false);
  try {
    mongoose.connect(process.env.DATABASE_CONNECTION_URL, () => {
      console.log("Database connection sucessfully");
    });
  } catch (error) {
    console.log("Database Error is:", error);
  }
};

module.exports = Connection;
