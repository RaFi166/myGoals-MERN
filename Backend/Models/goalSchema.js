const mongoose = require("mongoose");
const { Schema } = mongoose;

const goalSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Goals = mongoose.model("Goals", goalSchema);
module.exports = Goals;
