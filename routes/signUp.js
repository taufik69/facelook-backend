const express = require("express");
const router = express.Router();
const { signup } = require("../Controller/signupController");

router.post("/signup", signup);

module.exports = router;
