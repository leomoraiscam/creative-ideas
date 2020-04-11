const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  return res.sendFile(__dirname + "/index.html");
});

server.get("/ideias", function (req, res) {
  return res.sendFile(__dirname + "/ideias.html");
});

server.listen("3333");
