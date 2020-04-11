const express = require("express");
const nunjucks = require("nunjucks");
const server = express();

server.use(express.static("public"));

nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("index.html");
});

server.get("/ideias", function (req, res) {
  return res.render("ideias.html");
});

server.listen("3333");
