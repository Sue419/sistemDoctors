const express = require("express");

const app = express();

app.use(express.static("./dist/sistem"));
app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/sistem" })
);

app.listen(process.env.PORT || 8080);
