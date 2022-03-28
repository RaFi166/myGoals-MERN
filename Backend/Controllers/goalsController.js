const env = require("dotenv").config();
const GoalModel = require("../Models/goalSchema");

//get data
const getGoals = async (req, res) => {
  const data = await GoalModel.find();
  res.send(data);
};

//post data
const postGoals = (req, res) => {
  const Goals = GoalModel.create({
    text: req.body.text,
  })
    .then(() => res.send("success"))
    .catch((err) => res.send(err.message));
};

//update data
const putGoals = (req, res) => {
  res.send(`hello from goal ${req.params.id}`);
};

//delete data
const deleteGoals = (req, res) => {
  res.send(`hello from goal ${req.params.id} and deleted`);
};

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
