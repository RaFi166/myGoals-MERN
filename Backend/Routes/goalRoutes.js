const express = require("express");
const {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
} = require("../Controllers/goalsController");

const goalRouter = express.Router();

goalRouter.get("/", getGoals);

goalRouter.post("/", postGoals);

goalRouter.put("/:id", putGoals);

goalRouter.delete("/:id", deleteGoals);

module.exports = goalRouter;
