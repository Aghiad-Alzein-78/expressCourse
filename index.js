const express = require("express");
const print = require("./utility.js");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  print("Server running at port:", PORT);
});
