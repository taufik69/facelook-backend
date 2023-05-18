const chalk = require("chalk");
const express = require("express");
const app = express();
const { readdirSync } = require("fs");
const Connection = require("./database/databaseConnect");
const cors = require("cors");
require("dotenv").config();
// Database connention code
Connection();

app.use(cors());
app.use(express.json());

readdirSync("./routes").map((routesList) => {
  app.use("/", require("./routes/" + routesList));
});

app.listen(process.env.PORT || 9000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
