const express = require("express");
const router = express.Router();
const { signin } = require("../Controller/signInController");
router.post("/signin", signin);

module.exports = router;
