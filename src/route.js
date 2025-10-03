const express = require("express");
const questionController = require("./controllers/QuestionController");
const roomContoller = require("./controllers/RoomController");

const route = express.Router();

route.get("/", (req, res) => res.render("index.ejs", { page: "enter-room" }));

route.get("/create-pass", (req, res) =>
  res.render("index.ejs", { page: "createPass" })
);

route.get("/room/:room", roomContoller.open);

route.post("/create-room", roomContoller.create);

route.post("/enter", roomContoller.enter);

route.post("/question/create/:room", questionController.create);

route.post("/question/:room/:question/:action", questionController.index);

module.exports = route;
