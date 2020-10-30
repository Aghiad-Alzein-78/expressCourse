const express = require("express");
const print = require("./utility.js");
const app = express();
const path = require("path");

//will automatically route to any file inside the public folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  print(`Server started at ${PORT}`);
});
